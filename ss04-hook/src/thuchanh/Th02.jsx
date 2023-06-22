import React, { useState } from "react";

function Th02() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);

    if (!name || !address || !phone || !note) {
      setError("Vui lòng nhập đầy đủ thông tin");
      setSuccess(false);
      return;
    }
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      setError("Số điện thoại không đúng định dạng.");
      return;
    }
    setSuccess(true);
  };

  return (
    <div>
      {!success ? (
        <form action="" onSubmit={handleSubmit}>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <div>
            <label htmlFor="">Name:</label>
            <input onChange={(e) => setName(e.target.value)} type="text" />
          </div>
          <div>
            <label htmlFor="">Address:</label>
            <input onChange={(e) => setAddress(e.target.value)} type="text" />
          </div>
          <div>
            <label htmlFor="">Phone number:</label>
            <input onChange={(e) => setPhone(e.target.value)} type="text" />
          </div>
          <div>
            <label htmlFor="">Note:</label>
            <input onChange={(e) => setNote(e.target.value)} type="text" />
          </div>
          <button>Book</button>
        </form>
      ) : (
        <p style={{ color: "green" }}>success</p>
      )}
    </div>
  );
}

export default Th02;
