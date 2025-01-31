import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    try {
      const carNames = await this.getCarNames();
      const numAttempts = await this.getNumAttempts();
      this.racingResult(carNames, numAttempts);
    } catch (error) {
      throw new Error(`[ERROR] ${error.message}`);
    }
  }

  async getCarNames() {
    const carNames = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    if (carNames.length === 0) {
      throw new Error("이름을 입력하지 않았습니다.");
    }

    const splitNames = carNames.split(',').map(name => name.trim());
    if (carNames.split(',').length !== splitNames.length) {
      throw new Error("이름은 ,(콤마)로 구분합니다.");
    } else if (splitNames.some(name => name.length > 5)) {
      throw new Error("이름은 5자 이하만 가능합니다.");
    } else {
      return splitNames;
    }
  }

  async getNumAttempts() {
    const numAttempts = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    if (numAttempts.length === 0) {
      throw new Error("숫자를 입력하지 않았습니다.");
    }

    const changeInt = parseInt(numAttempts, 10);
    if (changeInt < 1) {
      throw new Error("시도할 횟수는 1 이상이어야 합니다.");
    } else {
      return changeInt;
    }
  }

  racingResult(carNames, numAttempts) {
    // 작성
  }
}

export default App;
