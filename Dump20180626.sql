/*
 Navicat Premium Data Transfer

 Source Server         : laptop
 Source Server Type    : MySQL
 Source Server Version : 50721
 Source Host           : localhost:3306
 Source Schema         : laptop_db

 Target Server Type    : MySQL
 Target Server Version : 50721
 File Encoding         : 65001

 Date: 26/06/2018 19:22:31
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for account
-- ----------------------------
DROP TABLE IF EXISTS `account`;
CREATE TABLE `account`  (
  `username` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `type` varchar(5) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `image` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`username`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of account
-- ----------------------------
INSERT INTO `account` VALUES ('admin', 'admin', '1', '/img/avatar.jpg');
INSERT INTO `account` VALUES ('user1', 'user1', '0', '/img/avatar.jpg');

-- ----------------------------
-- Table structure for bill
-- ----------------------------
DROP TABLE IF EXISTS `bill`;
CREATE TABLE `bill`  (
  `idBill` int(11) NOT NULL AUTO_INCREMENT,
  `customer` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `time` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `state` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'Chưa giao',
  `address` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `phone` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `shipMethod` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'Miễn Phí',
  `payMethod` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'Tiền mặt',
  `status` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `total` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`idBill`) USING BTREE,
  INDEX `Bill_Accout_PK_idx`(`customer`) USING BTREE,
  CONSTRAINT `Bill_Accout_PK` FOREIGN KEY (`customer`) REFERENCES `account` (`username`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for bill_info
-- ----------------------------
DROP TABLE IF EXISTS `bill_info`;
CREATE TABLE `bill_info`  (
  `idBill_info` int(11) NOT NULL AUTO_INCREMENT,
  `idBill` int(11) NOT NULL,
  `product` int(11) NOT NULL,
  `count` int(11) NOT NULL DEFAULT 1,
  PRIMARY KEY (`idBill_info`) USING BTREE,
  INDEX `Idbill_Bill_PK_idx`(`idBill`) USING BTREE,
  INDEX `BillInfo_Product_PK_idx`(`product`) USING BTREE,
  CONSTRAINT `BillInfo_Bill_PK` FOREIGN KEY (`idBill`) REFERENCES `bill` (`idBill`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `BillInfo_Product_PK` FOREIGN KEY (`product`) REFERENCES `product` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for brand
-- ----------------------------
DROP TABLE IF EXISTS `brand`;
CREATE TABLE `brand`  (
  `id` int(11) NOT NULL,
  `name` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `name_UNIQUE`(`name`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of brand
-- ----------------------------
INSERT INTO `brand` VALUES (3, 'Acer');
INSERT INTO `brand` VALUES (6, 'Apple');
INSERT INTO `brand` VALUES (2, 'Asus');
INSERT INTO `brand` VALUES (1, 'Dell');
INSERT INTO `brand` VALUES (4, 'HP');
INSERT INTO `brand` VALUES (5, 'MSI');

-- ----------------------------
-- Table structure for cart
-- ----------------------------
DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart`  (
  `idCart` varchar(20) CHARACTER SET big5 COLLATE big5_chinese_ci NOT NULL,
  `customer` varchar(45) CHARACTER SET big5 COLLATE big5_chinese_ci NULL DEFAULT NULL,
  `total` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`idCart`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = big5 COLLATE = big5_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for product
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `decription` varchar(2048) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'Không có mô tả',
  `ngaydang` date NOT NULL,
  `buyTimes` int(11) NOT NULL,
  `viewTimes` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `brand` int(11) NOT NULL,
  `type` int(11) NOT NULL,
  `picture` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `config` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `ten_UNIQUE`(`name`) USING BTREE,
  INDEX `Product_Brand_PK_idx`(`brand`) USING BTREE,
  INDEX `Product_Type_PK_idx`(`type`) USING BTREE,
  CONSTRAINT `Product_Brand_PK` FOREIGN KEY (`brand`) REFERENCES `brand` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `Product_Type_PK` FOREIGN KEY (`type`) REFERENCES `type` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB AUTO_INCREMENT = 57 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of product
-- ----------------------------
INSERT INTO `product` VALUES (1, 'Dell Vostro 15 3578-NGMPF11', 'NULL', '2016-05-15', 0, 10, 1000, 1, 1, 'Dell1', '');
INSERT INTO `product` VALUES (2, 'Dell Vostro 3468 ', 'NULL', '2015-02-12', 0, 11, 600, 1, 1, 'Dell2', '');
INSERT INTO `product` VALUES (3, 'Dell Inspiron 14 3467-M20NR1', 'NULL', '2017-06-24', 0, 10, 500, 1, 1, 'Dell3', '');
INSERT INTO `product` VALUES (4, 'Dell Inspiron 3467', 'NULL', '2018-02-11', 0, 12, 660, 1, 1, 'Dell4', 'NULL');
INSERT INTO `product` VALUES (5, 'Dell Inspiron 3567', 'NULL', '2018-01-01', 0, 14, 500, 1, 1, 'Dell5', 'NULL');
INSERT INTO `product` VALUES (6, 'Dell Vostro 5568', 'NULL', '2017-06-24', 0, 25, 550, 1, 1, 'Dell6', 'NULL');
INSERT INTO `product` VALUES (7, 'Dell Inspiron 5570', 'NULL', '2017-06-24', 0, 61, 500, 1, 1, 'Dell7', 'NULL');
INSERT INTO `product` VALUES (8, 'Dell Precision M6800', 'NULL', '2015-02-12', 0, 3, 3490, 1, 2, 'Dell8', 'NULL');
INSERT INTO `product` VALUES (9, 'Dell Precision M3800', 'NULL', '2015-02-12', 0, 24, 2236, 1, 2, 'Dell9', 'NULL');
INSERT INTO `product` VALUES (10, 'Dell Precision M5520', 'NULL', '2017-06-24', 0, 21, 2035, 1, 2, 'Dell10', 'NULL');
INSERT INTO `product` VALUES (11, 'Asus X441NA N4200 (GA070T)', 'NULL', '2018-02-11', 0, 45, 250, 2, 1, 'Asus1', 'NULL');
INSERT INTO `product` VALUES (12, 'Asus X441UA(WX027T)', 'NULL', '2015-02-12', 0, 24, 450, 2, 1, 'Asus5', 'NULL');
INSERT INTO `product` VALUES (13, 'Asus X541UA', 'NULL', '2015-02-12', 0, 56, 550, 2, 1, 'Asus3', 'NULL');
INSERT INTO `product` VALUES (14, 'Asus UX430UA', 'NULL', '2015-02-12', 0, 61, 1023, 2, 1, 'Asus4', 'NULL');
INSERT INTO `product` VALUES (15, 'Asus Gaming GL552VX DM070D (Black)', 'NULL', '2015-02-12', 0, 62, 1100, 2, 3, 'Asus2', 'NULL');
INSERT INTO `product` VALUES (16, 'Asus GL552JX-DM144D', 'NULL', '2017-06-24', 0, 124, 1200, 2, 3, 'Asus6', 'NULL');
INSERT INTO `product` VALUES (17, 'Asus A540UP', 'NULL', '2018-02-11', 0, 12, 600, 2, 1, 'Asus7', 'NULL');
INSERT INTO `product` VALUES (18, 'Asus X542UQ', 'NULL', '2018-01-01', 0, 41, 700, 2, 1, 'Asus8', 'NULL');
INSERT INTO `product` VALUES (19, 'Asus S510UQ', 'NULL', '2015-02-12', 0, 5, 860, 2, 1, 'Asus9', 'NULL');
INSERT INTO `product` VALUES (20, 'Asus X405UA', 'NULL', '2015-02-12', 0, 62, 500, 2, 1, 'Asus10', 'NULL');
INSERT INTO `product` VALUES (21, 'Acer Spin 3 SP314', 'NULL', '2017-06-24', 0, 62, 600, 3, 1, 'Acer1', 'NULL');
INSERT INTO `product` VALUES (22, 'Acer ES1 533', 'NULL', '2017-06-24', 0, 3, 300, 3, 1, 'Acer2', 'NULL');
INSERT INTO `product` VALUES (23, 'Acer Swift SF314-51-58CC NX.GKKSV.004', 'NULL', '2017-06-24', 0, 4, 750, 3, 1, 'Acer3', 'NULL');
INSERT INTO `product` VALUES (24, 'Acer Gaming VX5-591G-52YZ NH.GM2SV.002', 'NULL', '2017-06-24', 0, 5, 1100, 3, 3, 'Acer4', 'NULL');
INSERT INTO `product` VALUES (25, 'Acer G3-572-70J1 (NH.Q2CSV.003)', 'NULL', '2015-02-12', 0, 6, 1300, 3, 3, 'Acer5', 'NULL');
INSERT INTO `product` VALUES (26, 'Acer G3-572-50XL (NH.Q2CSV.001)', 'NULL', '2015-02-12', 0, 2, 1400, 3, 3, 'Acer9', 'NULL');
INSERT INTO `product` VALUES (27, 'Acer Aspire ES1 432', 'NULL', '2017-06-24', 0, 16, 300, 3, 1, 'Acer6', 'NULL');
INSERT INTO `product` VALUES (28, 'Acer Aspire E5 575G', 'NULL', '2017-06-24', 0, 6, 800, 3, 1, 'Acer7', 'NULL');
INSERT INTO `product` VALUES (29, 'Acer Swift SF314 32EX', 'NULL', '2017-06-24', 0, 25, 790, 3, 4, 'Acer8', 'NULL');
INSERT INTO `product` VALUES (30, 'Acer Aspire E5 570G', 'NULL', '2017-06-24', 0, 56, 750, 3, 1, 'Acer10', 'NULL');
INSERT INTO `product` VALUES (31, 'HP 15 bs641TU', 'NULL', '2015-02-12', 0, 1, 300, 4, 1, 'Hp1', 'NULL');
INSERT INTO `product` VALUES (32, 'HP Pavilion X360 ad032TU', 'NULL', '2015-02-12', 0, 36, 650, 4, 1, 'Hp2', 'NULL');
INSERT INTO `product` VALUES (33, 'HP Pavilion 14 bf019TU', 'NULL', '2017-06-24', 0, 61, 590, 4, 1, 'Hp3', 'NULL');
INSERT INTO `product` VALUES (34, 'HP 15 bs572TU', 'NULL', '2017-06-24', 0, 12, 490, 4, 1, 'Hp4', 'NULL');
INSERT INTO `product` VALUES (35, 'HP 15 bs571TU', 'NULL', '2017-02-06', 0, 2, 450, 4, 1, 'Hp5', 'NULL');
INSERT INTO `product` VALUES (36, 'HP Pavilion X360 ad026TU', 'NULL', '2018-01-01', 0, 4, 700, 4, 1, 'Hp6', 'NULL');
INSERT INTO `product` VALUES (37, 'HP Envy 13 ad158TU', 'NULL', '2015-02-12', 0, 5, 1000, 4, 1, 'Hp7', 'NULL');
INSERT INTO `product` VALUES (38, 'HP 15 bs575TU', 'NULL', '2015-02-12', 0, 31, 500, 4, 1, 'Hp8', 'NULL');
INSERT INTO `product` VALUES (39, 'HP 15 bs768TX', 'NULL', '2017-06-24', 0, 6, 850, 4, 1, 'Hp9', 'NULL');
INSERT INTO `product` VALUES (40, 'HP Envy 13 ad160TU', 'NULL', '2015-02-12', 0, 2, 1205, 4, 1, 'Hp10', 'NULL');
INSERT INTO `product` VALUES (41, 'MSI GP62MVR 7RFX-892XVN', 'NULL', '2015-02-12', 0, 42, 1620, 5, 3, 'MSI1', 'NULL');
INSERT INTO `product` VALUES (42, 'MSI GV72 7RE-1424XVN', 'NULL', '2015-02-12', 0, 51, 1100, 5, 3, 'MSI2', 'NULL');
INSERT INTO `product` VALUES (43, 'MSI GP72M 7REX-1216XVN', 'NULL', '2015-02-12', 0, 2, 1300, 5, 3, 'MSI3', 'NULL');
INSERT INTO `product` VALUES (44, 'MSI GS63 7RD- 093XVN', 'NULL', '2015-02-12', 0, 5, 1300, 5, 3, 'MSI4', 'NULL');
INSERT INTO `product` VALUES (45, 'MSI GV62 7RD-2823VN', 'NULL', '2015-02-12', 0, 3, 1290, 5, 3, 'MSI5', 'NULL');
INSERT INTO `product` VALUES (46, 'MSI GL63 8RD-099VN', 'NULL', '2018-02-11', 0, 23, 1400, 5, 3, 'MSI6', 'NULL');
INSERT INTO `product` VALUES (47, 'MSI GV72 7RD-874XVN', 'NULL', '2017-02-06', 0, 3, 1150, 5, 3, 'MSI7', 'NULL');
INSERT INTO `product` VALUES (48, 'MSI GV62 7RD-1883XVN', 'NULL', '2016-05-15', 0, 62, 1100, 5, 3, 'MSI8', 'NULL');
INSERT INTO `product` VALUES (49, 'MSI GP62M 7REX-1497XVN', 'NULL', '2015-02-12', 0, 12, 1500, 5, 3, 'MSI9', 'NULL');
INSERT INTO `product` VALUES (50, 'MSI GV62 7RD-1882XVN', 'NULL', '2017-11-11', 0, 6, 1200, 5, 3, 'MSI10', 'NULL');
INSERT INTO `product` VALUES (51, 'Apple Macbook Air MQD32SA/A', 'NULL', '2018-01-01', 0, 85, 1000, 6, 1, 'Mac1', 'NULL');
INSERT INTO `product` VALUES (52, 'MacBook Air MQD42ZP/A', 'NULL', '2016-05-15', 0, 57, 1400, 6, 1, 'Mac2', 'NULL');
INSERT INTO `product` VALUES (53, 'MacBook 13.3 MPXW2LL/A\"', 'NULL', '2018-01-01', 0, 56, 2500, 6, 1, 'Mac3', 'NULL');
INSERT INTO `product` VALUES (54, 'MacBook 13.3 MPXV2LL/A (Xám)\"', 'NULL', '2016-05-15', 0, 23, 2200, 6, 1, 'Mac4', 'NULL');
INSERT INTO `product` VALUES (55, 'MacBook 15 MPTR2SA/A\"', 'NULL', '2018-01-01', 0, 36, 3000, 6, 1, 'Mac5', 'NULL');
INSERT INTO `product` VALUES (56, 'MacBook 12 MNYM2ZP/A\"', 'NULL', '2017-06-24', 0, 37, 1600, 6, 1, 'Mac6', 'NULL');

-- ----------------------------
-- Table structure for product_cart
-- ----------------------------
DROP TABLE IF EXISTS `product_cart`;
CREATE TABLE `product_cart`  (
  `idproduct_cart` varchar(20) CHARACTER SET big5 COLLATE big5_chinese_ci NOT NULL,
  `idCart` varchar(20) CHARACTER SET big5 COLLATE big5_chinese_ci NULL DEFAULT NULL,
  `product` int(11) NULL DEFAULT NULL,
  `count` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`idproduct_cart`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = big5 COLLATE = big5_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for report_bill
-- ----------------------------
DROP TABLE IF EXISTS `report_bill`;
CREATE TABLE `report_bill`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idBill` int(11) NOT NULL,
  `content` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `time` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `Report_Bill_PK_idx`(`idBill`) USING BTREE,
  CONSTRAINT `Report_Bill_PK` FOREIGN KEY (`idBill`) REFERENCES `bill` (`idBill`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for type
-- ----------------------------
DROP TABLE IF EXISTS `type`;
CREATE TABLE `type`  (
  `id` int(11) NOT NULL,
  `name` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `name_UNIQUE`(`name`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of type
-- ----------------------------
INSERT INTO `type` VALUES (1, 'Business');
INSERT INTO `type` VALUES (3, 'Gaming');
INSERT INTO `type` VALUES (4, 'Ultrabook');
INSERT INTO `type` VALUES (2, 'Workstation');

-- ----------------------------
-- Table structure for user_info
-- ----------------------------
DROP TABLE IF EXISTS `user_info`;
CREATE TABLE `user_info`  (
  `username` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `birthday` date NULL DEFAULT NULL,
  `sex` varchar(5) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `address` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `phone` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `email` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`username`) USING BTREE,
  CONSTRAINT `Userinfo_Account_PK` FOREIGN KEY (`username`) REFERENCES `account` (`username`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_info
-- ----------------------------
INSERT INTO `user_info` VALUES ('user1', 'Nguyễn Đình Tiến', '1997-08-20', 'Nam', '181/3, Tân Phước,p6,q10,TPHCM', '012345567', 'tienandehit@gmail.com');

SET FOREIGN_KEY_CHECKS = 1;
