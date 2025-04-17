import { useState } from 'react';
import { produce } from 'immer';

export default function ProfileEditor() {
  const [profile, setProfile] = useState({
    name: 'Tiên Nghịch',
    address: {
      city: 'Đông Hoa',
      street: 'Thiên Đạo',
    },
    updateCount: 0,
  });

  function updateName(e) {
    const newName = e.target.value;
    setProfile(produce(draft => {
      draft.name = newName;
    }));
  }

  function updateCity(e) {
    const newCity = e.target.value;
    setProfile(produce(draft => {
      draft.address.city = newCity;
    }));
  }

  function updateStreet(e) {
    const newStreet = e.target.value;
    setProfile(produce(draft => {
      draft.address.street = newStreet;
    }));
  }

  function handleUpdateClick() {
    // Batching + Updater function
    setProfile(prev =>
      produce(prev, draft => {
        draft.updateCount++;
      })
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Chỉnh sửa thông tin nhân vật</h2>

      <p><strong>Tên:</strong> {profile.name}</p>
      <input value={profile.name} onChange={updateName} />

      <p><strong>Thành phố:</strong> {profile.address.city}</p>
      <input value={profile.address.city} onChange={updateCity} />

      <p><strong>Đường:</strong> {profile.address.street}</p>
      <input value={profile.address.street} onChange={updateStreet} />

      <p><strong>Số lần cập nhật:</strong> {profile.updateCount}</p>
      <button onClick={handleUpdateClick}>Cập nhật</button>
    </div>
  );
}
