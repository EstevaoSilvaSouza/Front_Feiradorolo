import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
`;

export const FormContainer = styled.div`
  width: 70%;
  padding: 50px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const LeftColumn = styled.div`
  flex: 1;
  margin-right: 20px;
`;

export const RightColumn = styled.div`
  flex: 1;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  label {
    font-weight: bold;
    margin-bottom: 5px;
  }

  input[type="text"],
  input[type="number"],
  select {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    width: 100%;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 10px;
  }

  select {
    appearance: none;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='6' fill='%23007bff' viewBox='0 0 12 6'%3E%3Cpath d='M6 5.293L.354.646a1 1 0 111.415-1.414L6 3.464l4.232-4.232a1 1 0 111.415 1.414L6 5.293z'/%3E%3C/svg%3E") no-repeat right center;
    background-size: 12px 6px;
    padding-right: 30px;
  }
`;

export const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const FileInput = styled.input`
  display: none;
`;

export const ImagePreviewWrapper = styled.div`
  position: relative;
  width: 350px;
  height: 250px;
  margin-right: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  .image-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #eee;
    color: #888;
    font-size: 18px;
  }
`;

export const FileInputLabel = styled.label<{$inputColor?:string;}>`
  background-color: ${props => props.$inputColor};
  color: #fff;
  margin-top:20px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 10px;
  display: inline-block;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ImagePreview = styled.img`
  width: 100%;
  max-width: 350px;
  height: auto;
  margin-bottom: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;