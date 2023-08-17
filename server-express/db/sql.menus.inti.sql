CREATE TABLE IF NOT EXISTS `menus` (
  `id` INT UNSIGNED AUTO_INCREMENT,
  `title` VARCHAR(100) NOT NULL,
  `icon` VARCHAR(50),
  `path` VARCHAR(100),
  `template_path` VARCHAR(100),
  `status` BOOLEAN DEFAULT TRUE,
  `deletable` BOOLEAN DEFAULT TRUE,
  `editable` BOOLEAN DEFAULT TRUE,
  `parent_id` INT,
  `creator` VARCHAR(50),
  `creator_id` VARCHAR(50),
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO menus (title, icon, path, template_path, deletable, editable) VALUES 
    ("用户管理","user", "/manage-center/user-manage", "manageCenter/userManage", FALSE, FALSE ),
    ("菜单管理","menu", "/manage-center/menu-manage", "manageCenter/menuManage", FALSE, FALSE)
;