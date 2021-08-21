import React, { useContext, useState } from "react";
import styles from "./PasswordGenCard.module.css";
import { TextField, Card, Button, CardHeader, CardContent, H5 } from "ui-neumorphism";
import passwordDetails from "zxcvbn";
import { LightThemeContext } from "../contexts/Contexts";
import passwordGenerator from "generate-password";

function PasswordGenCard(props) {
  const [password, setPassword] = useState("");
  const [passwordStrong, setPasswordStrong] = useState("Enter a password or generate!");
  const [passwordLength, setPasswordLength] = useState(8);
  const [copyBtnText, setCopyBtnText] = useState("Copy");

  const { lightTheme } = useContext(LightThemeContext);

  const getPassStatusByScore = password => {
    switch (password) {
      case 0:
        return "Too weak!";
      case 1:
        return "Weak!";
      case 2:
        return "Medium!";
      case 3:
        return "Good!";
      case 4:
        return "Strong!";
      default:
        return "Something wrong!";
    }
  };

  const handlePasswordChange = password => {
    document.getElementById("password-input").value = password;
    setPassword(password);
    setPasswordStrong(getPassStatusByScore(passwordDetails(password).score));
  };

  return (
    <Card dark={!lightTheme} className={styles.card}>
      <CardHeader className={styles.cardHeader}>
        <H5 className={styles.cardTitle}>
          <small>Generate a super</small>
          <br />
          <strong>strong password!</strong>
        </H5>
      </CardHeader>
      <CardContent className={styles.cardContent}>
        <TextField
          placeholder="Click generate..."
          hint={passwordStrong}
          counter={passwordLength}
          onChange={e => handlePasswordChange(e.value)}
          value={password}
          id="password-input"
          uncontrolled
          className={styles.password}
        />
        <TextField
          onChange={e => {
            let length = parseInt(e.value);
            if (!length) return setPasswordLength(0);
            setPasswordLength(length > 64 ? 64 : length);
          }}
          value={passwordLength.toString()}
          className={styles.passLengthInput}
          width={50}
          uncontrolled
        />
      </CardContent>
      <CardContent>
        <Button
          className={styles.copyBtn}
          title="Password length"
          onClick={() => {
            setCopyBtnText("Copied!");
            navigator.clipboard.writeText(password);
            setTimeout(() => {
              setCopyBtnText("Copy");
            }, 2500);
          }}
        >
          {copyBtnText}
        </Button>
        <Button
          className={styles.generateBtn}
          title="Password length"
          onClick={() => {
            setPasswordLength(passwordLength < 12 ? 12 : passwordLength);
            let strongPass = passwordGenerator.generate({
              length: passwordLength < 12 ? 12 : passwordLength,
              numbers: true,
              symbols: true,
            });
            handlePasswordChange(strongPass);
          }}
        >
          Generate
        </Button>
      </CardContent>
    </Card>
  );
}

export default PasswordGenCard;
