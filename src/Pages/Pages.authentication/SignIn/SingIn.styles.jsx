import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 400px;
  margin: auto;
  margin-top: 100px;
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    padding: 30px;
    margin-top: 80px;
  }

  @media (max-width: 480px) {
    padding: 20px;
    margin-top: 60px;
  }

  &:hover {
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);
  }
`;

export const Header = styled.h1`
  color: #333333;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 30px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 25px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Loader = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #007bff;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 0.8s linear infinite;
  align-self: center;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const HomeButton = styled.button`
  margin: 10px;
  padding: 12px 24px;
  background-color: #202123;
  color: #ffffff;
  border: none;
  border-radius: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px 20px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 8px 16px;
  }

  &:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 0, 123, 255, 0.2);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px;
  margin: 10px 0;
  border-radius: 12px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  @media (max-width: 768px) {
    padding: 12px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    font-size: 12px;
  }

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 10px rgba(0, 123, 255, 0.2);
  }
`;

export const ErrorText = styled.p`
  color: #d9534f;
  font-size: 14px;
  margin-top: -5px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

export const WarningMessage = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff4e5;
  color: #663c00;
  padding: 14px 20px;
  border-radius: 12px;
  border: 1px solid #ffd7b5;
  margin: 10px 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  line-height: 24px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, opacity 0.3s ease;

  @media (max-width: 768px) {
    padding: 12px 16px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 10px 12px;
    font-size: 12px;
  }
`;

export const WarningIcon = styled.div`
  margin-right: 12px;
  font-size: 24px;
  color: #e0a800;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const WarningText = styled.p`
  margin: 0;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const SubmitButton = styled.input`
  width: 100%;
  padding: 14px;
  background-color: #202123;
  color: #ffffff;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 18px;
  box-shadow: 0 4px 8px rgba(0, 123, 255, 0.2);
  transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    padding: 12px;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    font-size: 14px;
  }

  &:hover {
    background-color: #0056b3;
    box-shadow: 0 8px 16px rgba(0, 123, 255, 0.3);
    transform: translateY(-2px);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
  }
`;

export const SignUpLink = styled(Link)`
  color: #007bff;
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }

  &:hover {
    color: #0056b3;
    text-decoration: underline;
  }
`;
