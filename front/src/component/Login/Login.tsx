import { useState, FormEvent } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export const Login = () => {
  const [user_id, setUser_Id] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

     // バックエンドにPOSTリクエストを送る
    axios.post("http://127.0.0.1:8000/accounts/login/", {
      user_id: user_id,
      password: password,
    })
    .then((response) => {

      // ここでユーザー情報をローカルストレージに保存します
      localStorage.setItem("user_id", response.data.user_id);
      localStorage.setItem("token", response.data.token);
      alert("ログイン成功！");
      navigate("/profile");
    })
    .catch((error) => {
      console.error(error);
      setError("ログインに失敗しました。");
    });
  };

  return (
    <div className="Login">
        <h1>ログイン</h1>
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={user_id}
            onChange={(e) => setUser_Id(e.target.value)}
            placeholder="ユーザーID"
            required
        />
        <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="パスワード"
            required
        />
        {error && <div style={{ color: "red" }}>{error}</div>}
        <button type="submit">ログイン</button>
        </form>
    </div>
    
  );
};

export default Login;
