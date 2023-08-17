CREATE TABLE IF NOT EXISTS `users` (
  `user_id` INT UNSIGNED AUTO_INCREMENT,
  `username` VARCHAR(100) NOT NULL,
  `password` VARCHAR(50) NOT NULL DEFAULT "123456", 
  `avatar` VARCHAR(100),
  `company_name` VARCHAR(100),
  `company_id` INT,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO users 
    (username, company_name) 
    VALUES 
    ("Admin", "向前冲" );