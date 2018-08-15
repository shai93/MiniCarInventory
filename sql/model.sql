CREATE TABLE `model` (
  `model_id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `color` varchar(45) NOT NULL,
  `year` int(4) NOT NULL,
  `reg_no` varchar(45) NOT NULL,
  `note` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `manu_id` int(6) unsigned NOT NULL,
   PRIMARY KEY (`model_id`),
   FOREIGN KEY (manu_id) REFERENCES manufacturer(id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
