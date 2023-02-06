export interface Theme {
  text: string;
  background: string;
  buttonText: string;
  buttonTextHover: string;
  buttonBorder: string;
  buttonBg: string;
  buttonBgHover: string;
  shadow: string;
}

export const lightTheme: Theme = {
  text: '#000',
  background: '#fff',
  buttonText: '#000',
  buttonTextHover: '#fff',
  buttonBorder: '#000',
  buttonBg: 'rgba(0, 0, 0, 0)',
  buttonBgHover: 'rgba(0, 0, 0, 1)',
  shadow: 'rgba(0, 0, 0, 0.15)',
};

export const darkTheme: Theme = {
  text: '#fff',
  background: '#121212',
  buttonText: '#fff',
  buttonTextHover: '#000',
  buttonBorder: '#fff',
  buttonBg: 'rgba(255, 255, 255, 0)',
  buttonBgHover: 'rgba(255, 255, 255, 1)',
  shadow: 'rgba(100, 100, 100, 0.15)',
};
