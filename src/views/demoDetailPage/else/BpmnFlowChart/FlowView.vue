<template>
  <div :class="[{ darkTheme: theme == 'knightBlack' }, 'flow-view-container']">
    <div class="flow-view-header">
      <a-button-group size="small">
        <a-button icon="zoom-out" @click="zoomOut" />
        <a-button icon="zoom-in" @click="zoomIn" />
        <a-button icon="fullscreen" @click="fitViewport" />
      </a-button-group>
    </div>
    <div ref="canvas" class="flow-view-content"></div>
  </div>
</template>

<script>
import debounce from "lodash/debounce";
import { addListener, removeListener } from "resize-detector";
// import Viewer from "@wpg/bpmn/lib/Viewer";
import Viewer from "bpmn-js/lib/Viewer";
import SelectionModule from "diagram-js/lib/features/selection";
import MoveCanvasModule from "diagram-js/lib/navigation/movecanvas";
// 引入flowable的节点文件
import flowableModdle from "./flowable.json";
import "./bpmn.less";

const bpmnTasks = [
  "bpmn:UserTask",
  "bpmn:Task",
  "bpmn:SendTask",
  "bpmn:ReceiveTask",
  "bpmn:ManualTask",
  "bpmn:BusinessRuleTask",
  "bpmn:ServiceTask",
  "bpmn:ScriptTask",
  // 'bpmn:CallActivity',
  // 'bpmn:SubProcess'
];

export default {
  name: "FlowView",

  props: {
    xml: {
      type: String,
      default: "",
    },

    taskList: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {};
  },

  watch: {
    xml(val) {
      if (val) {
        this.createNewDiagram(this.xml);
      }
    },
  },
  computed: {
    theme() {
      return this.$store.state.setting.theme;
    },
  },

  mounted() {
    console.log("mounted");
    // 生成实例
    this.viewer = new Viewer({
      container: this.$refs.canvas,
      bpmnRenderer: {
        defaultStrokeColor: "#4285f4",
        defaultLabelColor: "#333",
      },
      additionalModules: [MoveCanvasModule, SelectionModule],
      moddleExtensions: {
        flowable: flowableModdle,
      },
    });

    window.viewer = this.viewer;

    // 新增流程定义
    if (this.xml) {
      this.createNewDiagram(this.xml);
    }

    this.handleModeler();

    this.__resizeHanlder = debounce(
      () => {
        this.fitViewport();
      },
      100,
      { leading: true }
    );
    addListener(this.$el, this.__resizeHanlder);

    this.$emit("create", this.viewer);
  },

  beforeDestory() {
    removeListener(this.$el, this.__resizeHanlder);
  },

  methods: {
    async createNewDiagram(data) {
      // 将字符串转换成图显示出来
      let xml = data.replace(/<!\[CDATA\[(.+?)]]>/g, function (match, str) {
        return str.replace(/</g, "&lt;");
      });
      try {
        await this.viewer.importXML(xml);

        this.fitViewport();

        this.$emit("ready", this.viewer);
      } catch (err) {
        console.error(err.message, err.warnings);
      }
    },

    fitViewport() {
      const viewport = document.querySelector(".flow-view-container .viewport");

      if (viewport) {
        this.zoom = this.viewer.get("canvas").zoom("fit-viewport");

        const bbox = viewport.getBBox();
        const currentViewbox = this.viewer.get("canvas").viewbox();
        const elementMid = {
          x: bbox.x + bbox.width / 2,
          y: bbox.y + bbox.height / 2,
        };

        if (currentViewbox.width && currentViewbox.height) {
          this.viewer.get("canvas").viewbox({
            x: elementMid.x - currentViewbox.width / 2,
            y: elementMid.y - currentViewbox.height / 2,
            width: currentViewbox.width,
            height: currentViewbox.height,
          });
          this.zoom = (bbox.width / currentViewbox.width) * 1.8;
        } else {
          setTimeout(() => {
            if (!this.resized) {
              this.fitViewport();
              this.resized = true;
            }
          }, 1500);
        }
      }
    },

    // 放大缩小
    zoomViewport(zoomIn = true) {
      this.zoom = this.viewer.get("canvas").zoom();
      this.zoom += zoomIn ? 0.1 : -0.1;
      this.viewer.get("canvas").zoom(this.zoom);
    },

    zoomOut() {
      this.zoomViewport(false);
    },

    zoomIn() {
      this.zoomViewport(true);
    },

    getOutgoing() {},

    fillColor(completeTask, todoTask) {
      const canvas = this.viewer.get("canvas");
      this.viewer._definitions.rootElements[0].flowElements.forEach((n) => {
        if (n.$type === "bpmn:UserTask") {
          // const complete = completeTask.find((m) => m.key === n.id);
          const todo = todoTask.find((m) => m.key === n.id);

          // if (complete) {
          //   canvas.addMarker(n.id, 'highlight');
          // }

          if (todo) {
            canvas.addMarker(n.id, "highlight-todo");
          }
        }
      });
    },

    // fillColor(taskList) {
    //   const canvas = this.viewer.get('canvas');
    //   this.viewer._definitions.rootElements[0].flowElements.forEach(n => {
    //     if (n.$type === 'bpmn:UserTask') {
    //       const completeTask = taskList.find(m => m.key === n.id);
    //       const todoTask = taskList.find(m => !m.completed);
    //       const endTask = taskList[taskList.length - 1];
    //       if (completeTask) {
    //         canvas.addMarker(n.id, completeTask.completed ? 'highlight' : 'highlight-todo');
    //         n.outgoing?.forEach(nn => {
    //           const targetTask = taskList.find(m => m.key === nn.targetRef.id);
    //           if (targetTask) {
    //             canvas.addMarker(nn.id, targetTask.completed ? 'highlight' : 'highlight-todo');
    //           } else if (nn.targetRef.$type === 'bpmn:ExclusiveGateway') {
    //             // canvas.addMarker(nn.id, 'highlight');
    //             canvas.addMarker(nn.id, completeTask.completed ? 'highlight' : 'highlight-todo');
    //             canvas.addMarker(
    //               nn.targetRef.id,
    //               completeTask.completed ? 'highlight' : 'highlight-todo'
    //             );
    //           } else if (nn.targetRef.$type === 'bpmn:EndEvent') {
    //             if (!todoTask && endTask.key === n.id) {
    //               canvas.addMarker(nn.id, 'highlight');
    //               canvas.addMarker(nn.targetRef.id, 'highlight');
    //             }
    //             if (!completeTask.completed) {
    //               canvas.addMarker(nn.id, 'highlight-todo');
    //               canvas.addMarker(nn.targetRef.id, 'highlight-todo');
    //             }
    //           }
    //         });
    //       }
    //     } else if (n.$type === 'bpmn:ExclusiveGateway') {
    //       n.outgoing?.forEach(nn => {
    //         const targetTask = taskList.find(m => m.key === nn.targetRef.id);
    //         if (targetTask) {
    //           canvas.addMarker(nn.id, targetTask.completed ? 'highlight' : 'highlight-todo');
    //         }
    //       });
    //     }
    //     if (n.$type === 'bpmn:StartEvent') {
    //       n.outgoing?.forEach(nn => {
    //         const completeTask = taskList.find(m => m.key === nn.targetRef.id);
    //         if (completeTask) {
    //           canvas.addMarker(nn.id, 'highlight');
    //           canvas.addMarker(n.id, 'highlight');
    //           return;
    //         }
    //       });
    //     }
    //   });
    // },

    handleModeler() {
      this.viewer.on("root.added", (e) => {
        if (e.element.type === "bpmn:Process") {
          this.root = null;
          this.$nextTick().then(() => {
            this.root = e.element;

            this.$emit("selection-root", this.root);
          });
        }
      });

      this.viewer.on("element.click", (e) => {
        const { element } = e;
        if (element.type === "bpmn:Process") {
          this.root = element;

          this.$emit("selection-root", this.root);
        }
      });

      this.viewer.on("selection.changed", (e) => {
        const element = e.newSelection[0];

        if (element) {
          if (bpmnTasks.includes(element.type)) {
            this.$nextTick().then(() => {
              this.element = element;

              this.$emit("selection-element", this.element);
            });
          } else {
            this.$emit("selection-root", this.root);
          }
        }
      });
    },

    // 对外 api
    getProcess() {
      const element = this.getProcessElement();

      return {
        id: element.id,
        name: element.name,
        category: element.$attrs["flowable:processCategory"],
      };
    },

    getProcessElement() {
      const rootElements = this.viewer.getDefinitions().rootElements;
      for (let i = 0; i < rootElements.length; i++) {
        if (rootElements[i].$type === "bpmn:Process") return rootElements[i];
      }
    },

    getFirstTask(flowElements) {
      let startElement = flowElements.find(
        (element) => element.$type === "bpmn:StartEvent"
      );
      let outgoing =
        startElement && startElement.outgoing ? startElement.outgoing[0] : null;
      let firstTask = outgoing ? outgoing.targetRef : null;

      return firstTask;
    },

    getTaskElements() {
      let rootElement = this.getProcessElement();
      let flowElements = rootElement.flowElements;
      let firstTask = this.getFirstTask(flowElements);
      let tasks = [];

      let bpmnTasks = [
        "bpmn:UserTask",
        "bpmn:Task",
        "bpmn:SendTask",
        "bpmn:ReceiveTask",
        "bpmn:ManualTask",
        "bpmn:BusinessRuleTask",
        "bpmn:ServiceTask",
        "bpmn:ScriptTask",
      ];
      let taskElements = flowElements.filter((element) =>
        bpmnTasks.includes(element.$type)
      );
      // 将第一个节点改为创建
      taskElements.forEach((element) => {
        if (element.id !== firstTask.id) {
          tasks.push(element);
        } else {
          tasks.unshift(element);
        }
      });

      return tasks;
    },

    clear() {
      this.viewer.clear();
    },
  },
};
</script>

<style lang="less" scoped>
.flow-view {
  &-container,
  &-content {
    width: 100%;
    height: 100%;
  }

  &-container {
    position: relative;
  }

  &-header {
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 10;
  }

  &-content {
    /deep/ .bjs-powered-by {
      display: none;
    }

    /deep/ .highlight.djs-shape .djs-visual > :nth-child(1) {
      fill: green !important;
      stroke: green !important;
      fill-opacity: 0.2 !important;
    }

    /deep/ .highlight.djs-shape .djs-visual > :nth-child(2) {
      fill: green !important;
    }

    /deep/ .highlight.djs-shape .djs-visual > path {
      fill: green !important;
      fill-opacity: 0.2 !important;
      stroke: green !important;
    }

    /deep/ .highlight.djs-connection > .djs-visual > path {
      stroke: green !important;
    }

    /deep/ .highlight-todo.djs-connection > .djs-visual > path {
      stroke: orange !important;
      stroke-dasharray: 4px !important;
      fill-opacity: 0.2 !important;
      marker-end: url(#sequencefloa-end-_E7DFDF-_E7DFDF-803g1kf6zwzmcig1y2ulm5egr);
    }

    /deep/ .highlight-todo.djs-shape .djs-visual > :nth-child(1) {
      animation: marchingants 1s forwards infinite linear;
      fill: orange !important;
      stroke: orange !important;
      stroke-dasharray: 4px !important;
      fill-opacity: 0.2 !important;
      stroke-dasharray: 8;
    }
  }
}

.darkTheme {
  /deep/ .djs-shape .djs-visual .djs-label > :nth-child(1) {
    fill: #666 !important;
  }

  /deep/ .highlight-todo.djs-shape .djs-label > :nth-child(1) {
    fill: rgb(231, 223, 223) !important;
  }
}
</style>
