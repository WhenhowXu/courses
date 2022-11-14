<template>
  <div ref="meterForm" class="print-box">
    <div class="page-header">
      <slot name="header"></slot>
    </div>
    <h2 style="text-align: center; margin-bottom: 32px">{{ title }}</h2>
    <div>
      <slot></slot>
    </div>
    <div class="footer-box">
      <div v-if="signData && signData.length > 0">
        <div v-for="item,index in signData" :key="index" class="sign-item-wrapper" >
          {{ item }}：
          <div class="sign-box" :style="signBoxStyle" />
        </div>
      </div>
    </div>
    <div class="page-footer">
      <slot name="footer"> xxx网络科技有限责任公司 </slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PrintContainer',
  props: {
    title: String,
    signData: { type: Array, default: () => [] },
    signBoxWidth: { type: Number, default: 80 },
  },
  computed: {
    signBoxStyle() {
      return `margin-left: ${this.signBoxWidth}px`;
    },
  },
};
</script>
<style lang="less">
.print-box {
  position: relative;
  height: 100%;
  .page-header {
    height: 32px;
    line-height: 32px;
    border-bottom: 1px solid #ccc;
  }
  .page-footer {
    position: absolute;
    width: 100%;
    bottom: 10px;
    text-align: right;
    border-top: 1px solid #ccc;
  }
  .table-header {
    margin: 10px 0;
    overflow: hidden;

    .first-line {
      margin-bottom: 10px;
    }

    .left,
    .right {
      & > div {
        span:first-child {
          color: #333;
        }
      }
    }

    .left {
      float: left;
      width: 50%;
    }

    .right {
      float: right;
    }
  }

  .footer-box {
    position: absolute;
    right: 30px;
    bottom: 42px;
    .sign-item-wrapper {
      margin-bottom: 20px;
    }

    .sign-box {
      width: 180px;
      margin-left: 80px;
      border-bottom: 1px solid;
    }
  }
}
@page {
  size: auto A4 landscape;
  margin: 3mm;
}

.print-box {
  page-break-after: always;

  & > div:not(:last-child) {
    margin-bottom: 6px;
  }
}
</style>
