import { useEffect, useState } from "react";

interface Place {
  "place name": string;
  state: string;
  latitude: string;
  longitude: string;
}

interface ZipData {
  "post code": string;
  country: string;
  places: Place[];
}

function ZipInfo() {
  const [data, setData] = useState<ZipData | null>(null);
  

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("https://api.zippopotam.us/us/33162");
        if (!res.ok) throw new Error("Request error");
        const result: ZipData = await res.json();
        setData(result);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  if (!data) return null;

  const place = data.places?.[0];
  if (!place) return <p>Нет данных о местах для этого ZIP-кода.</p>;

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>📮 Информация о ZIP-коде 33162 (Zippopotam API)</h2>
      <p>
        <strong>Страна:</strong> {data.country}
      </p>
      <p>
        <strong>Почтовый индекс:</strong> {data["post code"]}
      </p>

      {place && (
        <div>
          <p>
            <strong>Город:</strong> {place["place name"]}
          </p>
          <p>
            <strong>Штат:</strong> {place.state}
          </p>
          <p>
            <strong>Координаты:</strong> {place.latitude}, {place.longitude}
          </p>
        </div>
      )}
    </div>
  );
}

export default ZipInfo;
