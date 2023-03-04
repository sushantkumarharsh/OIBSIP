const calculateTemp = () => {
    const tempvalue = document.getElementById("input_value").value;
    console.log(tempvalue);
    const tempSelected = document.getElementById("selected");
    const tempselectedvalue =
      selected.options[tempSelected.selectedIndex].value;
    console.log(tempselectedvalue);
    const CelsiusToFahren = (Celsius) => {
      let Fahrenheit = (Celsius * 9) / 5 + 32;
      return Fahrenheit;
    };
    const CelsiusToKelvin = (Celsius) => {
      let Kelvin = Celsius + 273.15;
      return Kelvin;
    };
    const FahrenToCelsius = (Fahrenheit) => {
      let Celsius = ((Fahrenheit - 32) * 5) / 9;
      return Celsius;
    };
    const FahrenToKelvin = (Fahrenheit) => {
      let Kelvin = ((Fahrenheit - 32) * 5) / 9 + 273.15;
      return Kelvin;
    };

    const KelvinToCelsius = (Kelvin) => {
      let Celsius = Kelvin - 273.15;
      return Celsius;
    };
    const KelvinToFahren = (kelvin) => {
      let Fahrenheit = ((kelvin - 273.15) * 9) / 5 + 32;
      return Fahrenheit;
    };
    let result_1;
    let result_2;
    if (tempselectedvalue === "Celsius") {
      result_1 = CelsiusToFahren(tempvalue);
      result_2 = CelsiusToKelvin(tempvalue);
      console.log(result_1);
      console.log(result_2);
      document.getElementById(
        "result1"
      ).innerHTML = `= ${result_1} Fahrenheit`;
      document.getElementById("result2").innerHTML = `= ${result_2} Kelvin`;
    } else {
      if (tempselectedvalue === "Kelvin") {
        result_1 = KelvinToCelsius(tempvalue);
        result_2 = KelvinToFahren(tempvalue);
        document.getElementById(
          "result1"
        ).innerHTML = `= ${result_1} Celsius`;
        document.getElementById(
          "result2"
        ).innerHTML = `= ${result_2} Fahrenheit`;
      } else {
        result_1 = FahrenToCelsius(tempvalue);
        result_2 = FahrenToKelvin(tempvalue);
        document.getElementById(
          "result1"
        ).innerHTML = `= ${result_1} Celsius`;
        document.getElementById("result2").innerHTML = `= ${result_2} Kelvin`;
      }
    }
  };
