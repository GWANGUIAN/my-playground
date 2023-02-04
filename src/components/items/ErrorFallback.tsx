import { css } from '@emotion/react';

const container = css`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
`;

const errorTitle = css`
  margin-top: 20px;
  font-size: 20px;
  color: #2b2b2b;
`;

const errorMessage = css`
  font-size: 16px;
  font-weight: 400;
  color: #2b2b2b;
  margin: 10px 0 10px 0;
`;

const buttonBox = css`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const buttonStyle = css`
  font-weight: 400;
  font-size: 16px;
  letter-spacing: -0.04em;
  line-height: 22px;
  width: 120px;
  max-width: 30vw;
  min-width: 100px;
  height: 40px;
  background: #333333;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  color: #f5f5f7;
`;

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

export const ErrorFallback = ({
  error,
  resetErrorBoundary,
}: ErrorFallbackProps) => {
  const selectStatusCode = (message: string) =>
    message.split('status code ')[1];

  return (
    <div css={container}>
      <div css={errorTitle}>예상치 못한 에러가 발생하였습니다.</div>
      <div css={errorMessage}>
        <span>메세지: </span>
        {error.message}
      </div>
      {error.message.includes('status code') && (
        <div css={errorMessage}>
          <span>상태코드: </span>
          {selectStatusCode(error.message)}
        </div>
      )}
      <div css={buttonBox}>
        <button css={buttonStyle} onClick={resetErrorBoundary}>
          이전 페이지로
        </button>
      </div>
    </div>
  );
};
