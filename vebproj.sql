-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jul 22, 2017 at 06:24 PM
-- Server version: 10.1.13-MariaDB
-- PHP Version: 5.6.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vebproj`
--

-- --------------------------------------------------------

--
-- Table structure for table `album`
--

CREATE TABLE `album` (
  `id_albuma` int(11) NOT NULL,
  `naziv_albuma` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `album`
--

INSERT INTO `album` (`id_albuma`, `naziv_albuma`) VALUES
(1, 'FIFA365'),
(2, 'NBA2K17'),
(3, 'EURO2016');

-- --------------------------------------------------------

--
-- Table structure for table `porudzbine`
--

CREATE TABLE `porudzbine` (
  `porudzbina_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `id_slicice` int(11) DEFAULT NULL,
  `flag` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `porudzbine`
--

INSERT INTO `porudzbine` (`porudzbina_id`, `user_id`, `id_slicice`, `flag`) VALUES
(139, 139, 6, 2),
(140, 140, 1, 2),
(142, 142, 3, 2),
(193, 135, NULL, 2),
(194, 135, 1, 2),
(195, 135, 3, 2),
(196, 135, 2, 2),
(197, 135, NULL, 2),
(198, 138, 3, 2),
(199, 138, 5, 2),
(200, 138, NULL, 1),
(201, 135, 1, 2),
(202, 135, 3, 2),
(203, 135, NULL, 1),
(204, 139, 3, 2),
(205, 139, NULL, 1),
(207, 140, NULL, 2),
(209, 140, 2, 2),
(210, 140, 4, 2),
(211, 140, 5, 2),
(212, 140, NULL, 1),
(214, 141, NULL, 1),
(215, 142, 6, 2),
(216, 142, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `slicica`
--

CREATE TABLE `slicica` (
  `id_slicice` int(11) NOT NULL,
  `broj_slicice` int(11) NOT NULL,
  `ime` varchar(60) NOT NULL,
  `id_albuma` int(11) NOT NULL,
  `slika` varchar(255) NOT NULL,
  `detalji` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `slicica`
--

INSERT INTO `slicica` (`id_slicice`, `broj_slicice`, `ime`, `id_albuma`, `slika`, `detalji`) VALUES
(1, 1, 'Lionel Messi', 1, 'http://localhost/slikeAlbum/messi.jpg', 'Ovu slicicu možete zalepiti na 32. strani albuma FIFA 365. Mesi je Argentinski fudbaler i igrac Barselone. Sa svojih 30 godina osvojio je 4 trofeja Lige šampiona, 3 UEFA superkupa a isto toliko puta je osvajao i trofej namenjen klupskom šampionu sveta.'),
(2, 2, 'Cristiano Ronaldo', 1, 'http://localhost/slikeAlbum/cr.jpg', 'Kristijano Ronaldo je portugalski fudbaler koji trenutno igra za Real Madrid. Osvoji je 4 trofeja Lige sampiona, od toga 3 sa klubom iz Madrida a jedan sa Mancester Junajtedom.'),
(3, 3, 'Fifa Trophy Gold', 1, 'http://localhost/slikeAlbum/trophy.jpg', 'Ovu slicicu mozete zalepiti na drugoj strani albuma FIFA 365.'),
(4, 25, 'Paul George', 2, 'http://localhost/slikeAlbum/pg.jpg', 'Paul George je americki kosarkas koji je do skoro nastpupao za Indijana Pejserse. Ove godine ce nastupati za OKC Thunder.'),
(5, 26, 'Boban Marjanovic', 2, 'http://localhost/slikeAlbum/boban.jpg', 'Boban Marjanovic je srpski kosarkas koji igra na poziciji centra. Nastupao je za Crvenu zvezdu, San Antonio Spurs-e a trenutno igra za Detroit Pistonse.'),
(6, 31, 'Victor Oladipo', 2, 'http://localhost/slikeAlbum/oladipo.jpg', 'Viktor Oladipo je americki kosarkas koji je prethodne sezone nastupao za Oklahoma City Tandere. Ove sezone postao je igrac Indiana Pacersa u sklopu trejda Paul Georga.'),
(7, 45, 'Robert Lewandowski', 3, 'http://localhost/slikeAlbum/lewa.jpg', 'Ovu slicicu mozete zalepiti na 53. strani albuma EURO2016. Lewandovski je Poljski fudbaler koji trenutno igra za ekipu minhenskog Bajerna.'),
(8, 46, 'Polish Army Stadium', 3, 'http://localhost/slikeAlbum/pas.jpg', 'Na ovom stadionu igra klub Legija iz Varsave. Gradjen je u periodu od 1927. do 1930. godine.');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `username` varchar(60) NOT NULL,
  `password` varchar(60) NOT NULL,
  `email` varchar(60) NOT NULL,
  `adresa` varchar(60) NOT NULL,
  `role` varchar(60) NOT NULL,
  `token` varchar(255) NOT NULL,
  `role_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `username`, `password`, `email`, `adresa`, `role`, `token`, `role_id`) VALUES
(135, 'Darko1996', '736d316262db5e4fc16017716a62eaf6', 'darko1108stojanovic@gmail.com', 'safasufjasklf', 'admin', '58c0581c2b0bcbd3fbeaf6e303a25403f6ced390', 1),
(136, 'test1', 'cc03e747a6afbbcbf8be7668acfebee5', 'darko1108stojanovic@hotmail.com', 'sahfksakfldas', '', '00efe20288f8a6b0cfb149594e9f5b06e8a5aee1', 1),
(137, 'ajdesada', '535deac4096b11e24c2231349eecb0f8', 'sadas@gmail.com', 'sajkfhsaffsafsa', '', '3429c99d434a114a9da4c042cae67f67aa4bf658', 1),
(138, 'Igor123', 'c2d53eab1c3c169cc789ba7581fc7cfa', 'igor@gmail.com', 'adresaadresa', '', '93fc75e8fba77f933996a03b096b9e122504641b', 1),
(139, 'asdf', 'f1dc735ee3581693489eaf286088b916', 'edhgjhg@gmail.com', 'Beograd', '', 'e8209f948d15d2ca87a21765c44c60848d412918', 1),
(140, 'fdsa', 'f1dc735ee3581693489eaf286088b916', 'ghghgh@gmail.com', 'bg', '', '4fc171c2ba7b3468ffa862739041577dd7eb1798', 1),
(141, 'admin123', '0192023a7bbd73250516f069df18b500', 'mailadmin@gmail.com', 'adresaadresa', 'admin', '1a915d0cd49c2db008bc4bae6fd20e822cdf52e7', 1),
(142, 'narucivanje', '554044bce5a7f5b2b4691411a862ca22', 'narucivanje@mail.com', 'narucivanje', '', '4b76551958e8f473f75b87da046a38cfcaefc121', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `album`
--
ALTER TABLE `album`
  ADD PRIMARY KEY (`id_albuma`);

--
-- Indexes for table `porudzbine`
--
ALTER TABLE `porudzbine`
  ADD PRIMARY KEY (`porudzbina_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `id_slicice` (`id_slicice`);

--
-- Indexes for table `slicica`
--
ALTER TABLE `slicica`
  ADD PRIMARY KEY (`id_slicice`),
  ADD KEY `id_albuma` (`id_albuma`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `album`
--
ALTER TABLE `album`
  MODIFY `id_albuma` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `porudzbine`
--
ALTER TABLE `porudzbine`
  MODIFY `porudzbina_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=220;
--
-- AUTO_INCREMENT for table `slicica`
--
ALTER TABLE `slicica`
  MODIFY `id_slicice` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=143;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `porudzbine`
--
ALTER TABLE `porudzbine`
  ADD CONSTRAINT `id_slicice` FOREIGN KEY (`id_slicice`) REFERENCES `slicica` (`id_slicice`),
  ADD CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

--
-- Constraints for table `slicica`
--
ALTER TABLE `slicica`
  ADD CONSTRAINT `id_albuma` FOREIGN KEY (`id_albuma`) REFERENCES `album` (`id_albuma`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
