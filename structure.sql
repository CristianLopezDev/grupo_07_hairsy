-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-10-2022 a las 04:53:42
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `hairsy`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'color'),
(2, 'care'),
(3, 'styling'),
(4, 'barber');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `description` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `price` int(11) NOT NULL,
  `category_id` int(50) NOT NULL,
  `image` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `price`, `category_id`, `image`) VALUES
(1, 'Mascara Reparadora', 'Tratamiento de reparacion para cabellos quimicamen', 5200, 2, 'Mascara reparadora.png'),
(2, 'Tintura L\'Oreal 8.1', 'Tintura francesa, altura de tono 8 Rubio Claro, con reflejo ceniza', 2300, 1, 'vibrance1.jpg'),
(3, 'Cepillo de Brushing', 'Cepillo cerámico circular, térmico, para brushing profesional', 1600, 3, 'cepillo.jpg'),
(4, 'Wahl Magic Clip', 'Clipper de corte profesional, con peines incluidos', 75000, 4, 'clipper.jpg'),
(5, 'Mascara de Hidratacion', 'Tratamiento de hidratación aleman para cabellos quebradizos', 6300, 2, 'hidratacion.jpg'),
(6, 'Mascara Color', 'Tratamiento acido para cabellos teñidos, prolonga la duración de la tintura', 6500, 2, 'serum.jpg'),
(7, 'Tintura L\'Oreal 6.34', 'Tintura francesa, altura de tono 6 Rubio Oscuro, con reflejo chocolate', 2300, 1, 'vibrance2.png'),
(8, 'Tintura L\'Oreal 6', 'Tintura francesa, altura de tono 6 Rubio Oscuro', 2300, 1, 'vibrance3.jpg'),
(9, 'Wahl Detailer', 'Trimmer profesional para delineados precisos', 63000, 4, 'detailer.jpg'),
(10, 'Mascara anti-frizz', 'Tratamiento para control de frizz', 5800, 2, 'frizz.jpg'),
(11, 'Tijera filo navaja', 'Tijera profesional de corte filo navaja(dulce) de 6\' ', 8599, 3, 'tijera.jpg'),
(12, 'Peine de corte', 'Peine de corte profesional', 2500, 3, 'peine.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

CREATE TABLE `rol` (
  `id` int(11) NOT NULL,
  `rol` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `rol`
--

INSERT INTO `rol` (`id`, `rol`) VALUES
(1, 'Comprador'),
(2, 'Vendedor');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `fullname` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `username` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `email` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `birthday` date NOT NULL,
  `password` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `repassword` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `avatar` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `rol_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `fullname`, `username`, `email`, `birthday`, `password`, `repassword`, `avatar`, `rol_id`) VALUES
(1, 'Cristian Lopez', 'Chiru', 'chirumusic91@gmail.com', '1991-11-08', '$2a$10$vGb3jjH3DLPSAP2WxOArre9qhria2ZqG6v796xdCRzjF94bDGzOsu', '$2a$10$Owcr99Z7rR8kkI0seH0zrus7l8gD32Z2yw3NgNqXgxbghtbvg.Kvy', 'chiru.jpg', 1),
(2, 'Mauro Gallinal', 'Tony91', 'tonymdq91@hotmail.com', '1991-08-08', '$2a$10$vGb3jjH3DLPSAP2WxOArre9qhria2ZqG6v796xdCRzjF94bDGzOsu', '$2a$10$Owcr99Z7rR8kkI0seH0zrus7l8gD32Z2yw3NgNqXgxbghtbvg.Kvy', 'chiru.jpg', 1),
(3, 'Pepe Vasco', 'Pepito', 'wert@hotmail.com', '1991-08-08', '$2a$10$nnv065EL3LCPLGyzbTWGMuaDTlK.q2R5pFZHe1WROLOILfMM/Rxjy', '$2a$10$TjDVCDVDJdPJVTfg0odkX.f1YieMu0.JyBC03AcyPoj.1q1jveEUW', 'chiru.jpg', 2),
(4, 'Marco Polo', 'Polito18', 'marcopolo@hotmail.com', '1991-08-08', '$2a$10$nfTC2mHpJyfaf/5AhxNNRewOznsrpCQPJQpd4dUVy7/3JZSc/Vzau', '$2a$10$bKqDfRRic9F1sTE1f6tCV.qMUNpt547GBtlEULF8V0v/0Z6CXBYyK', 'chiru.jpg', 2),
(5, 'Jennifer Iralour', 'Jenny', 'jennifer@gmail.com', '1991-08-08', '$2a$10$qXk4ciFd4x219O/q.gcb1.T4bw1zLgs32Pe/Q7AvPWv9xqzJTFXp.', '$2a$10$JUJKEk1K3wlrSJdR14oep.IomnjzDMRNiW7s2DTAOBhiic6KWNIyG', 'chiru.jpg', 1),
(6, 'Franco Gallo', 'FAG', 'fag@gmail.com', '1991-08-08', '$2a$10$WvtCoj1PMnOXFiguLM1kz.hyaDKpbgj4OFKS9QQORNhJwiOcZOBjO', '$2a$10$dsJVfs/Nt2gaKDmc9LM/NO0ohGC88o4cq..SXYrjXROsqSuZRTwvW', 'chiru.jpg', 2),
(7, 'Agustin Ciribe', 'Agustin', 'agus@hotmail.com', '1991-08-08', '$2a$10$64GfAfchYTLYDEmgFFKmoeeq1.2E4IMtUBS0H97ksrMAcEFSIfZAe', '$2a$10$bEtYU6lWbKfabWAgaIEA8eTwkTo.qORksXwwKgoQSgQ36Y4JWqqGO', 'chiru.jpg', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Mail_UNIQUE` (`email`),
  ADD KEY `rol_id` (`rol_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `rol`
--
ALTER TABLE `rol`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `categories`
--
ALTER TABLE `categories`
  ADD CONSTRAINT `category_id` FOREIGN KEY (`id`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `rol`
--
ALTER TABLE `rol`
  ADD CONSTRAINT `rol_ibfk_1` FOREIGN KEY (`id`) REFERENCES `users` (`rol_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
