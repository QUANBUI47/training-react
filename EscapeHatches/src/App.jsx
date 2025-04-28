import React, { useState, useEffect, useRef } from 'react';

// Giả lập một hàm fetchBio từ API
const fetchBio = async (person) => {
  const bios = {
    Alice: "Alice is a software engineer.",
    Bob: "Bob is a data scientist.",
    Taylor: "Taylor is a web developer."
  };
  return new Promise((resolve) => setTimeout(() => resolve(bios[person]), 1000));
};

export default function App() {
  const [person, setPerson] = useState('Alice');
  const [bio, setBio] = useState(null);
  const [count, setCount] = useState(0);
  const inputRef = useRef(null);

  // Tự động focus vào trường nhập liệu đầu tiên khi component mount
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Fetch tiểu sử của người dùng khi 'person' thay đổi
  useEffect(() => {
    let isMounted = true; // Biến để kiểm tra xem component có bị unmount không

    const loadBio = async () => {
      setBio(null); // Đặt lại bio trước khi fetch
      try {
        const result = await fetchBio(person);
        if (isMounted) {
          setBio(result);
        }
      } catch (error) {
        if (isMounted) {
          setBio("Error fetching bio");
        }
      }
    };

    loadBio();

    // Cleanup function
    return () => {
      isMounted = false;
    };
  }, [person]);

  // Tạo một interval để đếm số lần thông báo được gửi mỗi giây
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);

    // Dọn dẹp interval khi component unmount
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Chạy một lần khi component mount

  return (
    <div>
      <h1>Thông tin người dùng</h1>

      <select value={person} onChange={(e) => setPerson(e.target.value)}>
        <option value="Alice">Alice</option>
        <option value="Bob">Bob</option>
        <option value="Taylor">Taylor</option>
      </select>

      <input 
        ref={inputRef} 
        value={person} 
        onChange={(e) => setPerson(e.target.value)} 
      />

      <hr />

      <p><i>{bio ?? 'Loading bio...'}</i></p>
      
      <h2>Số lần thông báo: {count}</h2>
    </div>
  );
}
