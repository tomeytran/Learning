const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // 1. Prompt alert
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n(Write option number)`
      )
    );
    console.log(answer);

    // 2. Register answer
    if (isNaN(answer)) {
      alert("Câu trả lời không hợp lệ");
    } else if (answer >= this.answers.length) {
      alert("Chỉ nhập 0-3");
    }

    typeof answer === "number" &&
      answer < this.answers.length &&
      this.answers[answer]++; // if answer=number & =0-3 then increase the count (đoạn new Array(4)...là layout sẵn 4 slot, vd input 3 thì vị trí đó +1)

    this.displayResults();
    this.displayResults("string");
  },

  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      // Poll results are a, b, c, d
      console.log(`Poll results are ${this.answers.join(", ")}`);
    }
  },
};

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll)); // phải thêm đoạn bind nếu ko nó chỉ đang trỏ

poll.displayResults.call({ answers: [5, 2, 3] }, "string");
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, "string");
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
