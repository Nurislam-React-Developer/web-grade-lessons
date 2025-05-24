import styled, {css} from 'styled-components';

const sizes = {
  small: {
    fontSize: '0.8rem',
    padding: '5px 10px',
    width: '100px',
  },
  medium: {
    fontSize: '1em',
    padding: '10px 20px',
    width: '150px',
  },
  large: {
    fontSize: '1.2rem',
    padding: '15px 30px',
    width: '200px',
  }
}

export const Button = styled.button`
	padding: 5px 10px;
	border: none;
	font-size: 20px;
	cursor: pointer;
	width: 200px;
	background-color: palevioletred;
	color: white;
	border-radius: 5px;

	${(props) => props.$primary && css`
    background-color: blue;
    color: white;
  `}

  ${(props) => props.disabled && css`
  opacity: 0.5;
  cursor: not-allowed;
  `}
`;

export const DangerButton = styled(Button)`
  background-color: red;
  color: white;
  
  &:hover {
    background-color: darkred;
  }
`;




// export const Button = styled.button`
// 	padding: 10px 20px;
// 	border: none;
// 	font-size: 16px;
// 	cursor: pointer;
// 	width: 200px;
// 	margin: 0 auto;
// 	background-color: ${(props) => (props.$highlighted ? 'yellow' : 'blue')};
// 	color: ${(props) => (props.$highlighted ? 'green' : 'red')};
// 	border-radius: 5px;

// 	&:hover {
// 		background-color: ${(props) => (props.$highlighted ? 'green' : 'darkblue')};
// 		color: white;
// 		transition: background-color 0.3s ease;
// 	}
// `;
