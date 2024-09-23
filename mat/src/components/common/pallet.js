import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
	palette: {
      primary: {
        main: "#FF7D29",
        // light: main값을 통해 계산됨
  	    // dark: main값을 통해 계산됨
        // contrastText: main값을 통해 계산됨

        typography: {
            fontFamily: '"Poppins", "Nunito", "Helvetica", "Arial", sans-serif', // 둥글고 괜찮은 폰트 설정
            h6: {
              fontFamily: '"Poppins", sans-serif', // 특정 헤딩 스타일 설정
            },
            body2: {
              fontFamily: '"Nunito", sans-serif', // 바디 텍스트 스타일 설정
            },
            // 다른 스타일도 필요에 따라 추가
          },
      },
    }
});