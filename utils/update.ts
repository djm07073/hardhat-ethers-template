import * as fs from "fs";
import { network } from "hardhat";
import * as jsonfile from "jsonfile";

export function updateAddr(
  key: string,
  addr: string,
  isNewFile: boolean = false
): void {
  // JSON 파일 읽기
  jsonfile.readFile(`../deployment/${network}`, (err: Error | null, data: any) => {
    if (!fs.existsSync(`../deployment/${network}`)) {
      if (isNewFile) {
        // 새로운 JSON 데이터를 만듭니다.
        const data: { [key: string]: string } = {};
        data[key] = addr;

        // 파일에 데이터 쓰기
        jsonfile.writeFile(
          `../deployment/${network}`,
          data,
          { spaces: 2 },
          (err: Error | null) => {
            if (err) {
              console.error("파일에 쓰기 실패: " + err);
              return;
            }
            console.log("새로운 파일이 생성되고 데이터가 추가되었습니다.");
          }
        );
        return;
      } else {
        return;
      }
    }

    // 데이터 수정
    data[key] = addr;

    // 수정된 데이터를 파일에 쓰기
    jsonfile.writeFile(`../deployment/${network}`, data, { spaces: 2 }, (err: Error | null) => {
      if (err) {
        console.error("파일에 쓰기 실패: " + err);
        return;
      }
      console.log("파일이 성공적으로 업데이트되었습니다.");
    });
  });
}
