import React, { useEffect, useState } from "react";

function ZipInfo() {
  const [data, setData] = useState(null); // данные из API
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchZipInfo = async () => {
      try {
        const response = await fetch("https://api.zippopotam.us/us/33162");
        if (!response.ok) {
          throw new Error("Ошибка при загрузке данных");
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchZipInfo();
  }, []); // только при mount

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>📮 Информация о ZIP-коде 33162 (Zippopotam API)</h2>

      {loading && <p>Загрузка...</p>}
      {error && <p style={{ color: "red" }}>Ошибка: {error}</p>}

      {data && (
        <div style={{ marginTop: "20px" }}>
          <p><strong>Страна:</strong> {data.country}</p>
          <p><strong>Почтовый индекс:</strong> {data["post code"]}</p>

          {data.places && data.places.length > 0 && (
            <div>
              <p><strong>Город:</strong> {data.places[0]["place name"]}</p>
              <p><strong>Штат:</strong> {data.places[0].state}</p>
              <p><strong>Координаты:</strong> {data.places[0].latitude}, {data.places[0].longitude}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ZipInfo;
