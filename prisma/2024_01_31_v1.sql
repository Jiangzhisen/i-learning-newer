CREATE DATABASE  IF NOT EXISTS `i-learning-newer` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `i-learning-newer`;
-- MySQL dump 10.13  Distrib 8.0.32, for Linux (x86_64)
--
-- Host: localhost    Database: i-learning-newer
-- ------------------------------------------------------
-- Server version	8.0.35-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Course`
--

DROP TABLE IF EXISTS `Course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Course` (
  `id` int NOT NULL AUTO_INCREMENT,
  `uuid` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` char(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `department` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `professorId` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Course_uuid_key` (`uuid`),
  KEY `Course_professorId_fkey` (`professorId`),
  CONSTRAINT `Course_professorId_fkey` FOREIGN KEY (`professorId`) REFERENCES `User` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Course`
--

LOCK TABLES `Course` WRITE;
/*!40000 ALTER TABLE `Course` DISABLE KEYS */;
INSERT INTO `Course` VALUES (3,'173b9968-cfb9-1070-3605-47167f6077c3','Artificial Intelligence and Basic(distance)','MI293E','資管二乙',1),(4,'6a2a9ae0-ef08-a601-86a9-5dc602018126','Artificial Intelligence in R Language(distance)','MI249D','資管二甲',1),(8,'0e093d9b-afb5-183e-6715-c0825d765f54','Big Data Analysis Certification','MI243L','資管四甲',1),(9,'f37527be-6fda-9ee9-97f9-6b7c853593fe','Business Applications in R Programming(distance)','MI248D','資管二甲',1),(10,'fc829cc1-083b-e9d9-388e-9d94ff026d9a','1122Business Internships C','MI443L','資管四甲',1),(11,'55bdfdbb-3c65-a693-1abb-525fe9bc6df3','Business Internships D','MI444L','資管四甲',1),(12,'f5558feb-552e-b4af-d941-5a08c4ce2fdb','Career competition ability of Chu-Han battle(distance)','CO003L','校際選課(大學部)',1),(13,'f622a735-6f99-d924-5a41-982a442225a7','Communication Soft Power for Workplace(distance)','CO006L','校際選課(大學部)',1),(14,'7751838b-e884-2261-391a-150ed65352d8','Global Information Systems Strategies Foundation(distance)','MI250D','資管二甲',1),(15,'0fd82734-b0a7-cbc0-29aa-b3ff8fafe6c8','Introduction to Computer Science(distance)','MI292E','資管二乙',1),(31,'3daa9b29-4337-1f23-19a7-b2674d34273f','Life and Character Exemplars(distance)','GE275A','延伸選修通識',1),(32,'7d4c7d1f-e56a-8811-b87f-8baadd1ccaeb','Business Ethics(distance)','GE517F','延伸選修通識',1),(33,'b550fd20-7dba-e803-2a86-cee8cfc978f0','CCNA Enterprise Network','MI410L','資管四甲',1),(34,'09962bb2-4a46-d631-af15-c8a91e4a0ff3','Learning Power BI for Data Visualization and Analysis(distance)','CO003L','校際選課(大學部)',1),(35,'09759530-917a-937b-3a57-9247ee087859','Management Information Systems 2','MI652L','資管四甲',1);
/*!40000 ALTER TABLE `Course` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Post`
--

DROP TABLE IF EXISTS `Post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Post` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `published` tinyint(1) NOT NULL DEFAULT '0',
  `authorId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Post_authorId_fkey` (`authorId`),
  CONSTRAINT `Post_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Post`
--

LOCK TABLES `Post` WRITE;
/*!40000 ALTER TABLE `Post` DISABLE KEYS */;
INSERT INTO `Post` VALUES (1,'2024-01-19 10:29:51.322','2024-01-19 10:31:13.473','Hello World',NULL,1,1);
/*!40000 ALTER TABLE `Post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Profile`
--

DROP TABLE IF EXISTS `Profile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Profile` (
  `id` int NOT NULL AUTO_INCREMENT,
  `bio` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `userId` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Profile_userId_key` (`userId`),
  CONSTRAINT `Profile_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Profile`
--

LOCK TABLES `Profile` WRITE;
/*!40000 ALTER TABLE `Profile` DISABLE KEYS */;
INSERT INTO `Profile` VALUES (1,'I like turtles',1);
/*!40000 ALTER TABLE `Profile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `User` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `uuid` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `User_email_key` (`email`),
  UNIQUE KEY `User_uuid_key` (`uuid`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
INSERT INTO `User` VALUES (1,'admin@gmail.com','Admin','$2b$10$ogyd/kjJHmwYKYhBj3/PLOpQI08BDe3.cbMiU9CXRZW5Ckv58TAFe','3f108abd-3a73-2d1c-da60-3455ff4e76b4'),(2,'user01@gmail.com','user01','$2b$10$5gSxg22DsPVLG5uLEfLSFOH4h6f7JPiAidbWyMm2P7aR0V.aHqhzG','28a5d536-3fac-deb4-1e8d-5339238d2e11'),(3,'user02@gmail.com','user02','$2b$10$pR6BJBcZl0Dc4kiV5V65XeKxLt1Y9CwgJCK1FnnzmZIYHg4O12rgy','7439d838-8f78-be85-e9cd-feaf4199df5e');
/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
INSERT INTO `_prisma_migrations` VALUES ('1fe99550-1b47-4478-ab45-88ffa6ee9e1a','b1b4bf23a2102708dbb502de890610c34c86640934d44f99d65e94fbee234de4','2024-01-30 02:36:34.605','20240130023634_add_course_table',NULL,NULL,'2024-01-30 02:36:34.342',1),('94722b4f-7f59-49a4-af01-238acf9ca5d8','329309b234771af8b42776ddce66f33fa767358d68b2b5182e7b08ee72bbeaa9','2024-01-26 04:36:15.991','20240126043615_add_uuid',NULL,NULL,'2024-01-26 04:36:15.849',1),('aafb90f2-3ce5-46a7-8448-deda48ddfe1b','7c836245a3cfba559918674062b4165c8ce536465695e740c74f352782dfe2a6','2024-01-19 10:20:28.597','20240119102028_init',NULL,NULL,'2024-01-19 10:20:28.147',1),('e8f12507-91a7-471d-9145-a113c3c4bc7d','139e01263834463ff8943ce7079e816c3707a6ae2a0abaadc3920424d3aef976','2024-01-23 04:29:43.151','20240123042943_add_password_col_to_user',NULL,NULL,'2024-01-23 04:29:43.082',1),('f49a09a4-6eeb-48f5-bb1f-83cc2ed3464f','9285a8de65967be3472f1bf7174dc522208980612318544b2ab2bb8d40ca6bb5','2024-01-23 04:31:59.274','20240123043159_add_password_not_null_property',NULL,NULL,'2024-01-23 04:31:59.117',1),('fa4272be-c506-41c9-a1e6-4523947da3e1','2c1b9c1405cf4a94aef8eedc80f4c11d9eeb1447d84edf904e862abfbe6dfa72','2024-01-30 03:13:19.056','20240130031318_remove_course_table_code_unique',NULL,NULL,'2024-01-30 03:13:19.003',1);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-31 11:21:16
