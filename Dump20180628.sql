-- MySQL dump 10.13  Distrib 5.7.20, for Linux (x86_64)
--
-- Host: localhost    Database: laptop_db
-- ------------------------------------------------------
-- Server version	5.7.22-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Configuration`
--

DROP TABLE IF EXISTS `Configuration`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Configuration` (
  `idConfig` varchar(5) NOT NULL,
  `cpuName` varchar(45) DEFAULT NULL,
  `cpuType` varchar(45) DEFAULT NULL,
  `cache` varchar(45) DEFAULT NULL,
  `ramSize` varchar(45) DEFAULT NULL,
  `ramType` varchar(45) DEFAULT NULL,
  `busSpeed` varchar(45) DEFAULT NULL,
  `diskSize` varchar(45) DEFAULT NULL,
  `diskType` varchar(45) DEFAULT NULL,
  `diskRound` varchar(45) DEFAULT NULL,
  `monitorTech` varchar(45) DEFAULT NULL,
  `monitorSize` varchar(45) DEFAULT NULL,
  `monitorResolution` varchar(45) DEFAULT NULL,
  `sizeGraphic` varchar(45) DEFAULT NULL,
  `chipset` varchar(45) DEFAULT NULL,
  `networkConnection` varchar(45) DEFAULT NULL,
  `bluetooth` varchar(45) DEFAULT NULL,
  `hdmi` varchar(45) DEFAULT NULL,
  `cardReader` varchar(45) DEFAULT NULL,
  `usb` varchar(45) DEFAULT NULL,
  `videoPort` varchar(45) DEFAULT NULL,
  `Lan` varchar(45) DEFAULT NULL,
  `speaker` varchar(45) DEFAULT NULL,
  `madein` varchar(45) CHARACTER SET utf8 DEFAULT NULL,
  `manufacturer` varchar(45) DEFAULT NULL,
  `typeProduct` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idConfig`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Configuration`
--

LOCK TABLES `Configuration` WRITE;
/*!40000 ALTER TABLE `Configuration` DISABLE KEYS */;
INSERT INTO `Configuration` VALUES ('dell','6th Generation Intel Core™','Intel® Core™ i5-6200U Processor','3Mb Cache',' 4GB','DDR3L','1600Mhz',' 500GB',' HDD','5400rpm','HD WLED TrueLife','15.6 inch','HD (1366 x 768) pixels',' 4GB','AMD R5-M335','802.11 1X1 ac','Bluetooth® 4.0','HDMI-out','1 SD card reader','1 x USB 3.0 PowerShare\n2 x USB 3.0',' 1 VGA','1 RJ45','Headphone/Microphone Combo','Nhập khẩu từ USA',' Dell','Brand New 100% - Full Box - Seal');
/*!40000 ALTER TABLE `Configuration` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Description`
--

DROP TABLE IF EXISTS `Description`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Description` (
  `idDescription` varchar(50) NOT NULL,
  `configInfo` longtext CHARACTER SET utf8,
  `designInfo` longtext CHARACTER SET utf8,
  `KeyboardAndTouchpad` longtext CHARACTER SET utf8,
  `portInfo` longtext CHARACTER SET utf8 COLLATE utf8_unicode_ci,
  PRIMARY KEY (`idDescription`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Description`
--

LOCK TABLES `Description` WRITE;
/*!40000 ALTER TABLE `Description` DISABLE KEYS */;
INSERT INTO `Description` VALUES ('dell','Dell Inspiron 5559 được trang bị bộ vi xử lý mới nhất Intel® Core™ i5-6200U Processor (3M Cache, up to 2.80 GHz), VGA tích hợp Intel HD520 được đánh giá có hiệu năng mạnh mẽ đáp ứng nhu cầu công việc của bạn (thiết kế đồ họa, làm phim…) cũng như chơi một số game thông dụng. Máy có hiệu năng ổn định, tốc độ xử lý tác vụ nhanh, khả năng chạy nhiều chương trình song song hay chạy hiệu quả các phần mềm thiết kế, đồ họa nhưng vẫn tiết kiệm điện năng. Inspiron 5559 có bộ nhớ RAM 4Gb và ổ cứng HDD500 là thoải mái để lưu trữ dữ liệu của mình. Máy được hãng Dell cài sẵn hệ điều hành Win10 bản quyền với nhiều tính năng thiết thực như có sẵn ứng dụng Dell HD audio, chương trình Auto Update của Dell và Trình quản lý Power Management được phát triển của chính hãng Dell, giúp bạn giữ cho máy tính xách tay của bạn sử dụng phần mềm mới nhất và bạn có thể tùy chỉnh cài đặt pin khi nhu cầu của mình… Dell Inspiron 5559 được trang bị công nghệ Camera RealSense của Intel, cho phép máy nhận diện khuôn mặt và cử chỉ của người sử dụng. Điều đó đồng nghĩa với người sử dụng có thể đăng nhập máy bằng gương mặt của mình hay chơi game 3D tương tác, xây dựng hình ảnh 3D… Đặc biệt máy sở hữu card đồ họa rời AMD R5-M335 4GB giúp xử lí 3D hỗ trợ tốt các chương trình đồ họa, chơi được nhiều loại game. Vì vậy, Dell Inspiron 5559 rất phù hợp với các game thủ hay người dùng thường xuyên phải dùng đến card đồ họa để thiết kế hay làm đồ án… Đây là chip xử lý gắn liền trên main của Inspiron 5559 nên bạn không thể nâng cấp card đồ họa khác.','Như đã đề cập phía trên Dell Inspiron 5559 mang đến cho người sử dụng những trải nghiệm thú vị hơn không chỉ trong công việc mà theo đánh giá thì còn cả trong việc giải trí. Về màn hình Trang bị màn hình lớn lên tới 15.6 inch với độ phân giải HD 1366 x 768 pixels kết hợp cùng công nghệ HD WLED TrueLife tiên tiến hiện nay, bạn sẽ luôn được tận hưởng những hình ảnh sống động và chân thực. Tuy vậy với kích thước 37.8 x 26 x 2.4 cm, Inspiron có kích thước nhỏ hơn so với các đối thủ của mình như Lenovo Ideapad 500 (38.4 x 26.5 x 2.5 cm) hay Asus F555LA (38.1 x 25.7 x 2.54cm). Đánh giá chi tiết với Phần mềm Spyder5 Elite, chúng ta có thể hiển thị RGB là …% , Adobe RGB là … % (Quay và nói trực tiếp khi dùng phần mềm) Tuy nhiên thông qua trải nghiệm thực tế, nếu có công việc cần sự chính xác tuyệt đối với màu sắc hiển thị thì với mức giá của Inspiron bạn có thể lựa chọn những dòng máy khác cạnh tranh với màn Full HD – đây là điểm mà Dell Inspiron 5559 cần nâng cấp và cải thiện trong những đời máy sau. Về âm thanh Không chỉ chú trọng cho kênh hình, công nghệ Waves MaxxAudio cùng hệ thống loa 2.0 được trang bị mang tới cho bạn trải nghiệm sắc sảo, sống động, lan tỏa tốt trên mọi ứng dụng kể cả nghe nhạc, xem phim hay chơi game. Chắc chắn hệ thống âm thanh của Dell Inspiron 5559 sẽ khiến bạn đắm chìm trong không gian giải trí của riêng mình. Ngoài ra giống như các đời máy trước Dell cũng trang bị cho Inspiron phần mềm cài đặt và chỉnh âm thanh Dellaudio, giúp người dùng có thể điều chỉnh các tần số cũng như phong cách nghe nhạc phù hợp với mình. Về thiết kế tổng thể Inspiron 5559 mang trên mình đường nét cứng cáp, chất liệu vỏ cao cấp cùng sự kết hợp hài hòa giữa màu bạc và đen khiến Dell Inspiron 5559 trở nên thân thiện với phong cách của nhiều người. Điểm đặc biệt của Dell Inspiron 5559 so với các dòng máy trước là máy được trang bị bề mặt chống vân tay và bám bẩn. Bốn góc máy được bo tròn hợp lý, tạo cảm giác máy mỏng và thanh lịch hơn. Bên cạnh đó bạn cần lưu ý là đường viền màn hình và bàn phím được phủ một lớp nhựa mỏng, để tăng thêm vẻ đẹp cho máy.','Dell Inspiron 5559 được trang bị một bàn phím Chiclet – được sử dụng thông dụng hiện nay gồm các phím có thiết kế hơi lõm theo phong cách “Island” có độ nảy tốt và gõ êm tay hạn chế tiếng \"lạch cạch\" làm ảnh hưởng đến người xung quanh. Không chỉ vậy, bố cục và khoảng cách giữa các phím rõ ràng giúp bạn có cảm giác như mình đang sử dụng máy bàn, đảm bảo sự chính xác, tránh lỗi chính tả khi gõ phím. Cụm bàn phím có đèn led trợ sáng giúp bạn sử dụng dễ dàng ngay cả khi làm việc hay sử dụng máy trong điều kiện thiếu sáng. Và đặc biệt Dell Inspiron 5559 có bộ phím số rất phù hợp với người làm việc văn phòng, cần thường xuyên tính toán cũng như nhập dữ liệu. Với touchpad có kích thước 10,4 x 7,8 cm, bề mặt mịn êm cùng nhiều diện tích giúp người sử dụng dễ dàng điều chỉnh, cũng như thao tác chính xác, nhanh chóng như vuốt và di chuyển hai ngón tay. Touchpad của Inspiron 5559 sẽ giúp bạn khai thác tối đa hiệu quả của thiết bị.','Dell đã trang bị cho chiếc Dell Inspiron 5559 hầu như đầy đủ tất cả những cổng giao tiếp mà ta cần đến nhằm cung cấp cho người sử dụng tính năng linh hoạt nhất phục vụ cho công việc và giải trí. Phía bên trái máy là cổng nguồn, cổng cắm Ethernet, cổng HDMI, cổng USB 3.0 và đầu đọc thẻ nhớ SD. Còn phía bên phải bao gồm Jack cắm tai nghe – mic kết hợp, 2 cổng USB 2.0, ổ DVD và 1 khe khóa Kensington. Webcam 720p cung cấp cho người sử dụng chất lượng ảnh với màu sắc chính xác, tương đương chất lượng ảnh của các webcam hiện được lưu hành trên thị trường. Cuối cùng, khi so sánh với các sản phẩm ra mắt cùng thời điểm, nếu bạn muốn sở hữu một chiếc máy tính xách tay với hiệu suất cao, tuổi thọ pin chắc chắn với giá cả tầm trung thì theo đánh giá Dell Inspiron 5559 chắn chắn là lựa chọn phù hợp nhất với yêu cầu bạn đặt ra.');
/*!40000 ALTER TABLE `Description` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `account`
--

DROP TABLE IF EXISTS `account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `account` (
  `username` varchar(50) NOT NULL,
  `password` varchar(60) NOT NULL,
  `type` varchar(5) NOT NULL,
  `image` varchar(50) NOT NULL,
  PRIMARY KEY (`username`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account`
--

LOCK TABLES `account` WRITE;
/*!40000 ALTER TABLE `account` DISABLE KEYS */;
INSERT INTO `account` VALUES ('admin','$2a$05$OtGpuyQrENcDD6d3sM5nYOV0eJrDX0WINXcie8hFsILFyruKDag1G','1','/img/avatar.jpg'),('user1','user1','0','/img/avatar.jpg');
/*!40000 ALTER TABLE `account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bill`
--

DROP TABLE IF EXISTS `bill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bill` (
  `idBill` varchar(20) NOT NULL,
  `customer` varchar(50) NOT NULL,
  `time` varchar(45) NOT NULL,
  `state` varchar(10) NOT NULL DEFAULT 'Chưa giao',
  `address` varchar(100) NOT NULL,
  `phone` varchar(10) NOT NULL,
  `shipMethod` varchar(50) NOT NULL DEFAULT 'Miễn Phí',
  `payMethod` varchar(45) NOT NULL DEFAULT 'Tiền mặt',
  `status` varchar(20) DEFAULT NULL,
  `total` int(11) DEFAULT NULL,
  PRIMARY KEY (`idBill`) USING BTREE,
  KEY `Bill_Accout_PK_idx` (`customer`) USING BTREE,
  CONSTRAINT `Bill_Accout_PK` FOREIGN KEY (`customer`) REFERENCES `account` (`username`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bill`
--

LOCK TABLES `bill` WRITE;
/*!40000 ALTER TABLE `bill` DISABLE KEYS */;
/*!40000 ALTER TABLE `bill` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bill_info`
--

DROP TABLE IF EXISTS `bill_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bill_info` (
  `idBill_info` int(11) NOT NULL,
  `idBill` varchar(20) NOT NULL,
  `product` int(11) NOT NULL,
  `count` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`idBill_info`),
  KEY `BillInfo_Product_PK_idx` (`product`) USING BTREE,
  CONSTRAINT `BillInfo_Product_PK` FOREIGN KEY (`product`) REFERENCES `product` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bill_info`
--

LOCK TABLES `bill_info` WRITE;
/*!40000 ALTER TABLE `bill_info` DISABLE KEYS */;
/*!40000 ALTER TABLE `bill_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `brand`
--

DROP TABLE IF EXISTS `brand`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `brand` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `name_UNIQUE` (`name`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brand`
--

LOCK TABLES `brand` WRITE;
/*!40000 ALTER TABLE `brand` DISABLE KEYS */;
INSERT INTO `brand` VALUES (3,'Acer'),(6,'Apple'),(2,'Asus'),(1,'Dell'),(4,'HP'),(5,'MSI');
/*!40000 ALTER TABLE `brand` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cart` (
  `idCart` varchar(20) NOT NULL,
  `customer` varchar(45) DEFAULT NULL,
  `total` int(11) DEFAULT NULL,
  PRIMARY KEY (`idCart`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=big5 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `decription` varchar(2048) NOT NULL DEFAULT 'Không có mô tả',
  `ngaydang` date NOT NULL,
  `buyTimes` int(11) NOT NULL,
  `viewTimes` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `brand` int(11) NOT NULL,
  `type` int(11) NOT NULL,
  `picture` varchar(45) DEFAULT NULL,
  `config` varchar(50) NOT NULL,
  `inware` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `ten_UNIQUE` (`name`) USING BTREE,
  KEY `Product_Brand_PK_idx` (`brand`) USING BTREE,
  KEY `Product_Type_PK_idx` (`type`) USING BTREE,
  CONSTRAINT `Product_Brand_PK` FOREIGN KEY (`brand`) REFERENCES `brand` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `Product_Type_PK` FOREIGN KEY (`type`) REFERENCES `type` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'Dell Vostro 15 3578-NGMPF11','NULL','2016-05-15',10,13,1000,1,1,'Dell1','dell',5),(2,'Dell Vostro 3468 ','NULL','2015-02-12',9,12,600,1,1,'Dell2','dell',5),(3,'Dell Inspiron 14 3467-M20NR1','NULL','2017-06-24',12,11,500,1,1,'Dell3','dell',5),(4,'Dell Inspiron 3467','NULL','2018-02-11',2,21,660,1,1,'Dell4','dell',5),(5,'Dell Inspiron 3567','NULL','2018-01-01',3,14,500,1,1,'Dell5','dell',5),(6,'Dell Vostro 5568','NULL','2017-06-24',4,26,550,1,1,'Dell6','dell',5),(7,'Dell Inspiron 5570','NULL','2017-06-24',6,61,500,1,1,'Dell7','dell',5),(8,'Dell Precision M6800','NULL','2015-02-12',7,3,3490,1,2,'Dell8','dell',5),(9,'Dell Precision M3800','NULL','2015-02-12',9,24,2236,1,2,'Dell9','dell',5),(10,'Dell Precision M5520','NULL','2017-06-24',11,21,2035,1,2,'Dell10','dell',5),(11,'Asus X441NA N4200 (GA070T)','NULL','2018-02-11',3,47,250,2,1,'Asus1','dell',5),(12,'Asus X441UA(WX027T)','NULL','2015-02-12',0,25,450,2,1,'Asus5','dell',5),(13,'Asus X541UA','NULL','2015-02-12',5,56,550,2,1,'Asus3','dell',5),(14,'Asus UX430UA','NULL','2015-02-12',0,61,1023,2,1,'Asus4','dell',5),(15,'Asus Gaming GL552VX DM070D (Black)','NULL','2015-02-12',0,62,1100,2,3,'Asus2','dell',5),(16,'Asus GL552JX-DM144D','NULL','2017-06-24',9,124,1200,2,3,'Asus6','dell',5),(17,'Asus A540UP','NULL','2018-02-11',0,13,600,2,1,'Asus7','dell',5),(18,'Asus X542UQ','NULL','2018-01-01',0,41,700,2,1,'Asus8','dell',5),(19,'Asus S510UQ','NULL','2015-02-12',0,5,860,2,1,'Asus9','dell',5),(20,'Asus X405UA','NULL','2015-02-12',0,63,500,2,1,'Asus10','dell',5),(21,'Acer Spin 3 SP314','NULL','2017-06-24',0,62,600,3,1,'Acer1','dell',5),(22,'Acer ES1 533','NULL','2017-06-24',0,3,300,3,1,'Acer2','dell',5),(23,'Acer Swift SF314-51-58CC NX.GKKSV.004','NULL','2017-06-24',0,4,750,3,1,'Acer3','dell',5),(24,'Acer Gaming VX5-591G-52YZ NH.GM2SV.002','NULL','2017-06-24',0,5,1100,3,3,'Acer4','dell',5),(25,'Acer G3-572-70J1 (NH.Q2CSV.003)','NULL','2015-02-12',0,6,1300,3,3,'Acer5','dell',5),(26,'Acer G3-572-50XL (NH.Q2CSV.001)','NULL','2015-02-12',0,2,1400,3,3,'Acer9','dell',5),(27,'Acer Aspire ES1 432','NULL','2017-06-24',0,16,300,3,1,'Acer6','dell',5),(28,'Acer Aspire E5 575G','NULL','2017-06-24',0,6,800,3,1,'Acer7','dell',5),(29,'Acer Swift SF314 32EX','NULL','2017-06-24',0,25,790,3,4,'Acer8','dell',5),(30,'Acer Aspire E5 570G','NULL','2017-06-24',0,56,750,3,1,'Acer10','dell',5),(31,'HP 15 bs641TU','NULL','2015-02-12',0,1,300,4,1,'Hp1','dell',5),(32,'HP Pavilion X360 ad032TU','NULL','2015-02-12',0,36,650,4,1,'Hp2','dell',5),(33,'HP Pavilion 14 bf019TU','NULL','2017-06-24',0,61,590,4,1,'Hp3','dell',5),(34,'HP 15 bs572TU','NULL','2017-06-24',0,12,490,4,1,'Hp4','dell',5),(35,'HP 15 bs571TU','NULL','2017-02-06',0,3,450,4,1,'Hp5','dell',5),(36,'HP Pavilion X360 ad026TU','NULL','2018-01-01',0,4,700,4,1,'Hp6','dell',5),(37,'HP Envy 13 ad158TU','NULL','2015-02-12',0,5,1000,4,1,'Hp7','dell',5),(38,'HP 15 bs575TU','NULL','2015-02-12',0,31,500,4,1,'Hp8','dell',5),(39,'HP 15 bs768TX','NULL','2017-06-24',0,6,850,4,1,'Hp9','dell',5),(40,'HP Envy 13 ad160TU','NULL','2015-02-12',0,2,1205,4,1,'Hp10','dell',5),(41,'MSI GP62MVR 7RFX-892XVN','NULL','2015-02-12',0,42,1620,5,3,'MSI1','dell',5),(42,'MSI GV72 7RE-1424XVN','NULL','2015-02-12',0,51,1100,5,3,'MSI2','dell',5),(43,'MSI GP72M 7REX-1216XVN','NULL','2015-02-12',0,2,1300,5,3,'MSI3','dell',5),(44,'MSI GS63 7RD- 093XVN','NULL','2015-02-12',0,5,1300,5,3,'MSI4','dell',5),(45,'MSI GV62 7RD-2823VN','NULL','2015-02-12',0,3,1290,5,3,'MSI5','dell',5),(46,'MSI GL63 8RD-099VN','NULL','2018-02-11',0,23,1400,5,3,'MSI6','dell',5),(47,'MSI GV72 7RD-874XVN','NULL','2017-02-06',0,3,1150,5,3,'MSI7','dell',5),(48,'MSI GV62 7RD-1883XVN','NULL','2016-05-15',0,62,1100,5,3,'MSI8','dell',5),(49,'MSI GP62M 7REX-1497XVN','NULL','2015-02-12',0,12,1500,5,3,'MSI9','dell',5),(50,'MSI GV62 7RD-1882XVN','NULL','2017-11-11',0,6,1200,5,3,'MSI10','dell',5),(51,'Apple Macbook Air MQD32SA/A','NULL','2018-01-01',0,87,1000,6,1,'Mac1','dell',5),(52,'MacBook Air MQD42ZP/A','NULL','2016-05-15',0,57,1400,6,1,'Mac2','dell',5),(53,'MacBook 13.3 MPXW2LL/A\"','NULL','2018-01-01',0,56,2500,6,1,'Mac3','dell',5),(54,'MacBook 13.3 MPXV2LL/A (Xám)\"','NULL','2016-05-15',0,23,2200,6,1,'Mac4','dell',5),(55,'MacBook 15 MPTR2SA/A\"','NULL','2018-01-01',0,36,3000,6,1,'Mac5','dell',5),(56,'MacBook 12 MNYM2ZP/A\"','NULL','2017-06-24',0,37,1600,6,1,'Mac6','dell',5);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_cart`
--

DROP TABLE IF EXISTS `product_cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_cart` (
  `idproduct_cart` varchar(20) NOT NULL,
  `idCart` varchar(20) DEFAULT NULL,
  `product` int(11) DEFAULT NULL,
  `count` int(11) DEFAULT NULL,
  PRIMARY KEY (`idproduct_cart`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=big5 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_cart`
--

LOCK TABLES `product_cart` WRITE;
/*!40000 ALTER TABLE `product_cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `report_bill`
--

DROP TABLE IF EXISTS `report_bill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `report_bill` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idBill` varchar(20) NOT NULL,
  `content` varchar(200) NOT NULL,
  `time` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  KEY `Report_Bill_PK_idx` (`idBill`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `report_bill`
--

LOCK TABLES `report_bill` WRITE;
/*!40000 ALTER TABLE `report_bill` DISABLE KEYS */;
/*!40000 ALTER TABLE `report_bill` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `type`
--

DROP TABLE IF EXISTS `type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `type` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `name_UNIQUE` (`name`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `type`
--

LOCK TABLES `type` WRITE;
/*!40000 ALTER TABLE `type` DISABLE KEYS */;
INSERT INTO `type` VALUES (1,'Business'),(3,'Gaming'),(4,'Ultrabook'),(2,'Workstation');
/*!40000 ALTER TABLE `type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_info`
--

DROP TABLE IF EXISTS `user_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_info` (
  `username` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `birthday` date DEFAULT NULL,
  `sex` varchar(5) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `phone` varchar(11) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`username`) USING BTREE,
  CONSTRAINT `Userinfo_Account_PK` FOREIGN KEY (`username`) REFERENCES `account` (`username`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_info`
--

LOCK TABLES `user_info` WRITE;
/*!40000 ALTER TABLE `user_info` DISABLE KEYS */;
INSERT INTO `user_info` VALUES ('user1','Nguyễn Đình Tiến','1997-08-20','Nam','181/3, Tân Phước,p6,q10,TPHCM','012345567','tienandehit@gmail.com');
/*!40000 ALTER TABLE `user_info` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-06-28 22:42:18
