-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-05-2022 a las 01:56:23
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `hermaq`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `brand`
--

CREATE TABLE `brand` (
  `brand_id` int(11) NOT NULL,
  `brand_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `brand`
--

INSERT INTO `brand` (`brand_id`, `brand_name`) VALUES
(1, 'BOSCH'),
(2, 'FEMA'),
(3, 'STANLEY'),
(4, 'GADNIC'),
(5, 'BLACK-DECKER'),
(6, 'BREMEN'),
(7, 'NIWA'),
(8, 'LUSQTOFF'),
(9, 'EINHELL'),
(10, 'GLADIATOR'),
(11, 'KSEIBI');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comment`
--

CREATE TABLE `comment` (
  `comment_id` int(11) NOT NULL,
  `comment` varchar(240) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product`
--

CREATE TABLE `product` (
  `product_id` int(11) NOT NULL,
  `product_name` varchar(50) NOT NULL,
  `product_price` decimal(10,0) NOT NULL,
  `product_brand_id` int(11) NOT NULL,
  `product_user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `product`
--

INSERT INTO `product` (`product_id`, `product_name`, `product_price`, `product_brand_id`, `product_user_id`) VALUES
(1, 'COMPRESOR AIRE', '8600', 2, 0),
(2, 'GABINETE CARRO', '21000', 4, 0),
(3, 'GABINETE CARRO', '24000', 3, 0),
(4, 'HIDROLAVADORA', '14000', 4, 0),
(5, 'HIDROLAVADORA', '17500', 4, 0),
(6, 'MOTOSIERRA', '34000', 1, 0),
(7, 'ROTOMARTILLO', '23000', 1, 0),
(8, 'ROTOMARTILLO', '25670', 9, 0),
(10, 'SET HERRAMIENTAS', '35700', 6, 0),
(11, 'SET HERRAMIENTAS', '32000', 11, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(50) NOT NULL,
  `user_name_alias` varchar(50) NOT NULL,
  `user_password` blob NOT NULL,
  `user_mail` varchar(50) NOT NULL,
  `user_comment_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='tabla usuarios';

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`user_id`, `user_name`, `user_name_alias`, `user_password`, `user_mail`, `user_comment_id`) VALUES
(1, 'DANIEL FERNANDEZ', 'danif', '', 'danif@hermaq.com', 0),
(2, 'FERNANDO CABRED', 'fercabred', '', 'fercabred@hermaq.com', 0),
(3, 'GUILLERMO PALMA', 'guillep', '', 'guillep@hermaq.com', 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `brand`
--
ALTER TABLE `brand`
  ADD PRIMARY KEY (`brand_id`),
  ADD KEY `brand_id` (`brand_id`,`brand_name`);

--
-- Indices de la tabla `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`comment_id`);

--
-- Indices de la tabla `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `product_brand_id` (`product_brand_id`),
  ADD KEY `product_user_id` (`product_user_id`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`),
  ADD KEY `user_comment_id` (`user_comment_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `brand`
--
ALTER TABLE `brand`
  MODIFY `brand_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_brand_id` FOREIGN KEY (`product_brand_id`) REFERENCES `brand` (`brand_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
