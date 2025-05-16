import React from 'react';
import styled, { keyframes } from 'styled-components';

// === Анимация вращения ===
const spin = keyframes`
  0% { transform: rotate(0deg); }
  50% { transform: rotate(180deg); }
  100% { transform: rotate(360deg); }
`;

// === Стилизованные компоненты ===

// Фон спиннера
const SpinnerOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #0f0d0d;
	z-index: 9999;
`;

// Контейнер спиннера
const SpinnerContainer = styled.div`
	width: 250px;
	height: 250px;
	display: inline-block;
	overflow: hidden;
`;

// Внутренний контейнер для анимации
const SpinnerInner = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	transform: translateZ(0) scale(1);
	backface-visibility: hidden;
	transform-origin: 0 0;
`;

// Основной круг с анимацией
const SpinnerCircle = styled.div`
	position: absolute;
	width: 220px;
	height: 220px;
	top: 15px;
	left: 15px;
	border-radius: 50%;
	box-shadow: 0 4px 0 0 #2fc024;
	transform-origin: 110px 112px;
	box-sizing: content-box;
	animation: ${spin} 1.61s linear infinite;
`;

// Текст под спиннером
const SpinnerText = styled.div`
	margin-top: 20px;
	color: #2fc024;
	font-size: 18px;
	font-weight: bold;
`;

// === Компонент Spinner ===
const Spinner = ({ isLoading }) => {
	if (!isLoading) return null;

	return (
		<SpinnerOverlay>
			<SpinnerContainer>
				<SpinnerInner>
					<SpinnerCircle />
				</SpinnerInner>
			</SpinnerContainer>
			<SpinnerText>Загрузка...</SpinnerText>
		</SpinnerOverlay>
	);
};

export default Spinner;
