import admin from "firebase-admin";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

// __dirname 대체
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 서비스 계정 키 경로
const serviceAccount = path.join(__dirname, "serviceAccountKey.json");

// Firebase Admin 초기화
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// 업로드할 JSON 파일 목록
const files = ["json/eventlistData.json", "json/mainnewsData.json"];

// JSON 파일 Firestore 업로드 함수
async function uploadJsonToFirestore(file) {
  try {
    const filePath = path.join(__dirname, file);
    const rawData = fs.readFileSync(filePath, "utf-8");
    const jsonData = JSON.parse(rawData);

    const collectionName = path.basename(file, ".json"); // 파일명 -> 컬렉션 이름으로

    if (Array.isArray(jsonData)) {
      for (const doc of jsonData) {
        let docId = null;

        const idKey = Object.keys(doc).find((key) => 
          key.toLowerCase().includes("id")
        );

        if (idKey){
          docId = String(doc[idKey]);
        }

        // 문서 ID docId 있으면 사용, 없으면 랜덤
        const docRef = docId
          ? db.collection(collectionName).doc(docId)
          : db.collection(collectionName).doc();

        await docRef.set(doc);
      }
      console.log(`${file} 배열 데이터 업로드 완료 (${jsonData.length}개 문서)`);
    } else if (typeof jsonData === "object") {
      // 단일 객체 JSON
      const idKey = Object.keys(jsonData).find((key) =>
        key.toLowerCase().includes("id")
      );

      const docId = idKey ? String(jsonData[idKey]) : undefined;

      const docRef = docId
        ? db.collection(collectionName).doc(docId)
        : db.collection(collectionName).doc();

      await docRef.set(jsonData);
      console.log(`${file} 객체 데이터 업로드 완료`);
    } else {
      console.warn(`${file} JSON 구조가 배열도 객체도 아님`);
    }
  } catch (err) {
    console.error(`${file} 업로드 실패:`, err);
  }
}

// 전체 파일 업로드 실행
async function uploadAllFiles() {
  for (const file of files) {
    await uploadJsonToFirestore(file);
  }
  console.log("모든 파일 업로드 완료!");
}

// 실행
uploadAllFiles();