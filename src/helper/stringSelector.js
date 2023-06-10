const stringSelector = (payloads) => {
  payloads.forEach((food, i) => {
    // FILTERING KEYWORD
    if (food.keyword[0] === "c") {
      let tempStr = food.keyword;
      const newTempStr_1 = tempStr.replace("c", "");
      const newTempStr_2 = newTempStr_1.replace("(", "");
      const newTempStr_3 = newTempStr_2.replace(")", "");
      const tempRegex = new RegExp('"', "g");
      const finalTempStr_1 = newTempStr_3.replace(tempRegex, "");

      food.keyword = finalTempStr_1;
    } else {
      let tempStr = food.keyword;
      const tempRegex = new RegExp('"', "g");
      const finalTempStr_1 = tempStr.replace(tempRegex, "");
      food.keyword = finalTempStr_1;
    }

    // FILTERING IMAGE
    if (food.image[0] === "c") {
      let tempStr = food.image;
      const newTempStr_1 = tempStr.replace("c", "");
      const newTempStr_2 = newTempStr_1.replace("(", "");
      const newTempStr_3 = newTempStr_2.replace(")", "");
      const tempRegex = new RegExp('"', "g");
      const finalTempStr_1 = newTempStr_3.replace(tempRegex, "");

      const arrStr = finalTempStr_1.split(", ");

      food.image = arrStr[0];
    } else {
      let tempStr = food.image;
      const tempRegex = new RegExp('"', "g");
      const finalTempStr_1 = tempStr.replace(tempRegex, "");
      food.image = finalTempStr_1;
    }
  });
};

module.exports = stringSelector;
