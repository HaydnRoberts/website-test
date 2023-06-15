const pokemon = {
    Cyndaquil: {
      HP: 39,
      Attack: 52,
      Defence: 43,
      "Sp.Attack": 60,
      "Sp.Defence": 50,
      Speed: 65,
      Total: 309,
      Type1: "Fire",
      Type2: "None",
      Movepool: [1, 2, 3, 4],
    },
    Totodile: {
      HP: 50,
      Attack: 65,
      Defence: 64,
      "Sp.Attack": 44,
      "Sp.Defence": 48,
      Speed: 43,
      Total: 314,
      Type1: "Water",
      Type2: "None",
      Movepool: [5, 6, 7, 8],
    },
    Chikorita: {
      HP: 45,
      Attack: 49,
      Defence: 65,
      "Sp.Attack": 49,
      "Sp.Defence": 65,
      Speed: 45,
      Total: 318,
      Type1: "Grass",
      Type2: "None",
      Movepool: [9, 10, 11, 12],
    },
  };

const pokemonmoves = {
    // the effects were poorly implemented in the python version so i am going to leave them out of this version until everything else is working right
    1 : {"Name" : "Flame Charge",
        "Type" : "Fire",
        "Category" : "Physical",
        "Power" : 50,
        "Accuracy" : 100,
        "Effects" : "Speed +1 100"},
    2 : {"Name" : "Earthquake",
        "Type" : "Ground",
        "Category" : "Physical",
        "Power" : 100,
        "Accuracy" : 100,
        "Effects" : "None"},
    3 : {"Name" : "Double-Edge",
        "Type" : "Normal",
        "Category" : "Physical",
        "Power" : 120,
        "Accuracy" : 100,
        "Effects" : "Recoil 1/3"},
    4 : {"Name" : "Lava Plume",
        "Type" : "Fire",
        "Category" : "Special",
        "Power" : 80,
        "Accuracy" : 100,
        "Effects" : "Burn 30"},

    5 : {"Name" : "Water Gun",
        "Type" : "Water",
        "Category" : "Special",
        "Power" : 40,
        "Accuracy" : 100,
        "Effects" : "None"},
    6 : {"Name" : "Ice Fang",
        "Type" : "Ice",
        "Category" : "Physical",
        "Power" : 65,
        "Accuracy" : 95,
        "Effects" : "Flinch 10"},
    7 : {"Name" : "Sheer cold",
        "Type" : "Ice",
        "Category" : "Special",
        "Power" : 10000,
        "Accuracy" : 30,
        "Effects" : "None"},
    8 : {"Name" : "Crunch",
        "Type" : "Dark",
        "Category" : "Physical",
        "Power" : 80,
        "Accuracy" : 80,
        "Effects" : "OpDefence -2 20"},

        
    9 : {"Name" : "Stone Edge",
        "Type" : "Rock",
        "Category" : "Physical",
        "Power" : 100,
        "Accuracy" : 80,
        "Effects" : "None"},
    10 : {"Name" : "Razor Leaf",
        "Type" : "Grass",
        "Category" : "Physical",
        "Power" : 55,
        "Accuracy" : 95,
        "Effects" : "Crit"},
    11 : {"Name" : "Magical Leaf",
        "Type" : "Grass",
        "Category" : "Special",
        "Power" : 60,
        "Accuracy" : 101,
        "Effects" : "None"},
    12 : {"Name" : "Dragon Claw",
        "Type" : "Dragon",
        "Category" : "Physical",
        "Power" : 80,
        "Accuracy" : 100,
        "Effects" : "None"},
}; 

AttackingTypes = {
    "Fire" : {"Normal" : 1.0,
            "Fire" : 0.5,
            "Water" : 0.5,
            "Grass" : 2.0,
            "Electric" : 1.0,
            "Ice" : 2.0,
            "Fighting" : 1.0,
            "Poison" : 1.0,
            "Ground" : 1.0,
            "Flying" : 1.0,
            "Psychic" : 1.0,
            "Bug" : 2.0,
            "Rock" : 0.5,
            "Ghost" : 1.0,
            "Dragon" : 0.5,
            "Dark" : 1.0,
            "Steel" : 2.0
    },
    "Normal" : {"Normal" : 1.0,
            "Fire" : 1.0,
            "Water" : 1.0,
            "Grass" : 1.0,
            "Electric" : 1.0,
            "Ice" : 1.0,
            "Fighting" : 1.0,
            "Poison" : 1.0,
            "Ground" : 1.0,
            "Flying" : 1.0,
            "Psychic" : 1.0,
            "Bug" : 1.0,
            "Rock" : 0.5,
            "Ghost" : 0.0,
            "Dragon" : 1.0,
            "Dark" : 1.0,
            "Steel" : 0.5
    },
    "Water" : {"Normal" : 1.0,
            "Fire" : 2.0,
            "Water" : 0.5,
            "Grass" : 0.5,
            "Electric" : 1.0,
            "Ice" : 1.0,
            "Fighting" : 1.0,
            "Poison" : 1.0,
            "Ground" : 2.0,
            "Flying" : 1.0,
            "Psychic" : 1.0,
            "Bug" : 1.0,
            "Rock" : 2.0,
            "Ghost" : 1.0,
            "Dragon" : 0.5,
            "Dark" : 1.0,
            "Steel" : 1.0
    },
    "Grass" : {"Normal" : 1.0,
            "Fire" : 0.5,
            "Water" : 2.0,
            "Grass" : 0.5,
            "Electric" : 1.0,
            "Ice" : 1.0,
            "Fighting" : 1.0,
            "Poison" : 0.5,
            "Ground" : 2.0,
            "Flying" : 0.5,
            "Psychic" : 1.0,
            "Bug" : 0.5,
            "Rock" : 2.0,
            "Ghost" : 1.0,
            "Dragon" : 0.5,
            "Dark" : 1.0,
            "Steel" : 0.5
    },
    "Electric" : {"Normal" : 1.0,
            "Fire" : 1.0,
            "Water" : 1.0,
            "Grass" : 2.0,
            "Electric" : 0.5,
            "Ice" : 0.5,
            "Fighting" : 1.0,
            "Poison" : 1.0,
            "Ground" : 0.0,
            "Flying" : 2.0,
            "Psychic" : 1.0,
            "Bug" : 1.0,
            "Rock" : 1.0,
            "Ghost" : 1.0,
            "Dragon" : 0.5,
            "Dark" : 1.0,
            "Steel" : 1.0
    },
    "Ice" : {"Normal" : 1.0,
            "Fire" : 0.5,
            "Water" : 0.5,
            "Grass" : 2.0,
            "Electric" : 1.0,
            "Ice" : 0.5,
            "Fighting" : 1.0,
            "Poison" : 1.0,
            "Ground" : 2.0,
            "Flying" : 2.0,
            "Psychic" : 1.0,
            "Bug" : 1.0,
            "Rock" : 1.0,
            "Ghost" : 1.0,
            "Dragon" : 2.0,
            "Dark" : 1.0,
            "Steel" : 0.5
    },
    "Fighting" : {"Normal" : 2.0,
            "Fire" : 1.0,
            "Water" : 1.0,
            "Grass" : 1.0,
            "Electric" : 1.0,
            "Ice" : 2.0,
            "Fighting" : 1.0,
            "Poison" : 0.5,
            "Ground" : 1.0,
            "Flying" : 0.5,
            "Psychic" : 0.5,
            "Bug" : 0.5,
            "Rock" : 2.0,
            "Ghost" : 0.0,
            "Dragon" : 1.0,
            "Dark" : 2.0,
            "Steel" : 2.0
    },
    "Poison" : {"Normal" : 1.0,
            "Fire" : 1.0,
            "Water" : 1.0,
            "Grass" : 2.0,
            "Electric" : 1.0,
            "Ice" : 1.0,
            "Fighting" : 1.0,
            "Poison" : 0.5,
            "Ground" : 0.5,
            "Flying" : 1.0,
            "Psychic" : 1.0,
            "Bug" : 1.0,
            "Rock" : 0.5,
            "Ghost" : 0.5,
            "Dragon" : 1.0,
            "Dark" : 1.0,
            "Steel" : 0.0
    },
    "Ground" : {"Normal" : 1.0,
            "Fire" : 2.0,
            "Water" : 1.0,
            "Grass" : 0.5,
            "Electric" : 2.0,
            "Ice" : 1.0,
            "Fighting" : 1.0,
            "Poison" : 2.0,
            "Ground" : 1.0,
            "Flying" : 0.0,
            "Psychic" : 1.0,
            "Bug" : 0.5,
            "Rock" : 2.0,
            "Ghost" : 1.0,
            "Dragon" : 1.0,
            "Dark" : 1.0,
            "Steel" : 2.0
    },
    "Flying" : {"Normal" : 1.0,
            "Fire" : 1.0,
            "Water" : 1.0,
            "Grass" : 2.0,
            "Electric" : 0.5,
            "Ice" : 1.0,
            "Fighting" : 2.0,
            "Poison" : 1.0,
            "Ground" : 1.0,
            "Flying" : 1.0,
            "Psychic" : 1.0,
            "Bug" : 2.0,
            "Rock" : 0.5,
            "Ghost" : 1.0,
            "Dragon" : 1.0,
            "Dark" : 1.0,
            "Steel" : 0.5
    },
    "Psychic" : {"Normal" : 1.0,
            "Fire" : 1.0,
            "Water" : 1.0,
            "Grass" : 1.0,
            "Electric" : 1.0,
            "Ice" : 1.0,
            "Fighting" : 2.0,
            "Poison" : 2.0,
            "Ground" : 1.0,
            "Flying" : 1.0,
            "Psychic" : 0.5,
            "Bug" : 1.0,
            "Rock" : 1.0,
            "Ghost" : 1.0,
            "Dragon" : 1.0,
            "Dark" : 0.0,
            "Steel" : 0.5
    },
    "Bug" : {"Normal" : 1.0,
            "Fire" : 0.5,
            "Water" : 1.0,
            "Grass" : 2.0,
            "Electric" : 2.0,
            "Ice" : 1.0,
            "Fighting" : 0.5,
            "Poison" : 0.5,
            "Ground" : 1.0,
            "Flying" : 0.5,
            "Psychic" : 2.0,
            "Bug" : 1.0,
            "Rock" : 2.0,
            "Ghost" : 0.5,
            "Dragon" : 1.0,
            "Dark" : 2.0,
            "Steel" : 0.5
    },
    "Rock" : {"Normal" : 1.0,
            "Fire" : 2.0,
            "Water" : 1.0,
            "Grass" : 1.0,
            "Electric" : 1.0,
            "Ice" : 2.0,
            "Fighting" : 0.5,
            "Poison" : 1.0,
            "Ground" : 0.5,
            "Flying" : 2.0,
            "Psychic" : 1.0,
            "Bug" : 2.0,
            "Rock" : 1.0,
            "Ghost" : 1.0,
            "Dragon" : 1.0,
            "Dark" : 1.0,
            "Steel" : 0.5
    },
    "Ghost" : {"Normal" : 0.0,
            "Fire" : 1.0,
            "Water" : 1.0,
            "Grass" : 1.0,
            "Electric" : 1.0,
            "Ice" : 1.0,
            "Fighting" : 1.0,
            "Poison" : 1.0,
            "Ground" : 1.0,
            "Flying" : 1.0,
            "Psychic" : 2.0,
            "Bug" : 1.0,
            "Rock" : 1.0,
            "Ghost" : 2.0,
            "Dragon" : 1.0,
            "Dark" : 0.5,
            "Steel" : 1.0
    },
    "Dragon" : {"Normal" : 1.0,
            "Fire" : 1.0,
            "Water" : 1.0,
            "Grass" : 1.0,
            "Electric" : 1.0,
            "Ice" : 1.0,
            "Fighting" : 1.0,
            "Poison" : 1.0,
            "Ground" : 1.0,
            "Flying" : 1.0,
            "Psychic" : 1.0,
            "Bug" : 1.0,
            "Rock" : 1.0,
            "Ghost" : 1.0,
            "Dragon" : 2.0,
            "Dark" : 1.0,
            "Steel" : 0.5
    },
    "Dark" : {"Normal" : 1.0,
            "Fire" : 1.0,
            "Water" : 1.0,
            "Grass" : 1.0,
            "Electric" : 1.0,
            "Ice" : 1.0,
            "Fighting" : 0.5,
            "Poison" : 1.0,
            "Ground" : 1.0,
            "Flying" : 1.0,
            "Psychic" : 2.0,
            "Bug" : 1.0,
            "Rock" : 1.0,
            "Ghost" : 2.0,
            "Dragon" : 1.0,
            "Dark" : 0.5,
            "Steel" : 1.0
    },
    "Steel" : {"Normal" : 1.0,
            "Fire" : 0.5,
            "Water" : 0.5,
            "Grass" : 1.0,
            "Electric" : 0.5,
            "Ice" : 2.0,
            "Fighting" : 1.0,
            "Poison" : 1.0,
            "Ground" : 1.0,
            "Flying" : 1.0,
            "Psychic" : 1.0,
            "Bug" : 1.0,
            "Rock" : 2.0,
            "Ghost" : 1.0,
            "Dragon" : 1.0,
            "Dark" : 1.0,
            "Steel" : 0.5
    }
};


function HealthBar(progression, end, length) {
    let color = "";
    if (progression <= end / 5) {
      color = "red";
    } else if (progression <= end / 2) {
      color = "gold";
    } else {
      color = "green";
    }
  
    let progressBar = "";
    const fullBar = "▓";
    const emptyBar = "░";
    const percentage = (progression / end) * 100;
  
    for (let i = 0; i < length; i++) {
      const forPercentage = (i / length) * 100;
      if (forPercentage < percentage) {
        progressBar += fullBar;
      } else {
        progressBar += emptyBar;
      }
    }
    return `<span style="color: ${color};">${progressBar}</span>`;
  }
  
 
  function getSelectedPokemon1() {
    var selectedValue = document.querySelector('input[name="pokemon1"]:checked').value;
    console.log(selectedValue);
    p1move1(selectedValue)
    p1move2(selectedValue)
    p1move3(selectedValue)
    p1move4(selectedValue)
  }

  function getSelectedPokemon2() {
    var selectedValue = document.querySelector('input[name="pokemon1"]:checked').value;
    console.log(selectedValue);
    p2move1(selectedValue)
    p2move2(selectedValue)
    p2move3(selectedValue)
    p2move4(selectedValue)
  }

function getSelectedMove(selectElement) {
    const selectedMoveValue = selectElement.value;
    const selectedMove = pokemonmoves[selectedMoveValue];
    return selectedMove;
  }
  
  function updateMoveOptions(pokemonName) {
    const selectElements = document.getElementsByClassName("moves");
    for (let i = 0; i < selectElements.length; i++) {
      const selectElement = selectElements[i];
      selectElement.innerHTML = "";
  
      const moves = pokemon[pokemonName].Movepool;
      for (const move of moves) {
        const moveName = pokemonmoves[move].Name;
        const option = document.createElement("option");
        option.value = move;
        option.text = `${moveName}()`;
        selectElement.appendChild(option);
      }
    }
  }
  
  function updateHealthBars() {
    const p1healthTMP = parseInt(document.getElementById("input1").value);
    const p2healthTMP = parseInt(document.getElementById("input2").value);
    const p1totalhealth = 100;
    const p2totalhealth = 100;
  
    const resultEl = document.getElementById("result");
    resultEl.innerHTML = HealthBar(p1healthTMP, p1totalhealth, 60);
    const result2El = document.getElementById("result2");
    result2El.innerHTML = HealthBar(p2healthTMP, p2totalhealth, 60);
  }
  
  function selectPokemon(selectElement) {
    const selectedPokemon = selectElement.value;
    updateMoveOptions(selectedPokemon);
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    updateHealthBars();
  
    const input1El = document.getElementById("input1");
    const input2El = document.getElementById("input2");
  
    input1El.addEventListener("input", updateHealthBars);
    input2El.addEventListener("input", updateHealthBars);
  });
  
  function p1move1(selectedValue) {
    const moveSelectElement1p1 = document.getElementById("moveSelect1p1");
    console.log(pokemon[selectedValue]["Movepool"])
    console.log(pokemon[selectedValue]["Movepool"][0])
    const selectedMove = pokemonmoves[pokemon[selectedValue]["Movepool"][0]]["Name"];
    // Perform actions with the selected move
    moveSelectElement1p1.innerHTML = pokemonmoves[pokemon[selectedValue]["Movepool"][0]]["Name"];
    console.log(pokemonmoves[pokemon[selectedValue]["Movepool"][0]]["Name"])
  }
  
  function p1move2(selectedValue) {
    const moveSelectElement2p1 = document.getElementById("moveSelect2p1");
    console.log(pokemon[selectedValue]["Movepool"])
    console.log(pokemon[selectedValue]["Movepool"][1])
    const selectedMove = pokemonmoves[pokemon[selectedValue]["Movepool"][1]]["Name"];
    // Perform actions with the selected move
    moveSelectElement2p1.innerHTML = pokemonmoves[pokemon[selectedValue]["Movepool"][1]]["Name"];
    console.log(pokemonmoves[pokemon[selectedValue]["Movepool"][1]]["Name"])
  }
  
  function p1move3(selectedValue) {
    const moveSelectElement3p1 = document.getElementById("moveSelect3p1");
    console.log(pokemon[selectedValue]["Movepool"])
    console.log(pokemon[selectedValue]["Movepool"][2])
    const selectedMove = pokemonmoves[pokemon[selectedValue]["Movepool"][2]]["Name"];
    // Perform actions with the selected move
    moveSelectElement3p1.innerHTML = pokemonmoves[pokemon[selectedValue]["Movepool"][2]]["Name"];
    console.log(pokemonmoves[pokemon[selectedValue]["Movepool"][2]]["Name"])
  }
  
  function p1move4(selectedValue) {
    const moveSelectElement4p1 = document.getElementById("moveSelect4p1");
    console.log(pokemon[selectedValue]["Movepool"])
    console.log(pokemon[selectedValue]["Movepool"][3])
    const selectedMove = pokemonmoves[pokemon[selectedValue]["Movepool"][3]]["Name"];
    // Perform actions with the selected move
    moveSelectElement4p1.innerHTML = pokemonmoves[pokemon[selectedValue]["Movepool"][3]]["Name"];
    console.log(pokemonmoves[pokemon[selectedValue]["Movepool"][3]]["Name"])
  }

  function p2move1(selectedValue) {
    const moveSelectElement1p2 = document.getElementById("moveSelect1p2");
    console.log(pokemon[selectedValue]["Movepool"])
    console.log(pokemon[selectedValue]["Movepool"][0])
    const selectedMove = pokemonmoves[pokemon[selectedValue]["Movepool"][0]]["Name"];
    // Perform actions with the selected move
    moveSelectElement1p2.innerHTML = pokemonmoves[pokemon[selectedValue]["Movepool"][0]]["Name"];
    console.log(pokemonmoves[pokemon[selectedValue]["Movepool"][0]]["Name"])
  }
  
  function p2move2(selectedValue) {
    const moveSelectElement2p2 = document.getElementById("moveSelect2p2");
    console.log(pokemon[selectedValue]["Movepool"])
    console.log(pokemon[selectedValue]["Movepool"][1])
    const selectedMove = pokemonmoves[pokemon[selectedValue]["Movepool"][1]]["Name"];
    // Perform actions with the selected move
    moveSelectElement2p2.innerHTML = pokemonmoves[pokemon[selectedValue]["Movepool"][1]]["Name"];
    console.log(pokemonmoves[pokemon[selectedValue]["Movepool"][1]]["Name"])
  }
  
  function p2move3(selectedValue) {
    const moveSelectElement3p2 = document.getElementById("moveSelect3p2");
    console.log(pokemon[selectedValue]["Movepool"])
    console.log(pokemon[selectedValue]["Movepool"][2])
    const selectedMove = pokemonmoves[pokemon[selectedValue]["Movepool"][2]]["Name"];
    // Perform actions with the selected move
    moveSelectElement3p2.innerHTML = pokemonmoves[pokemon[selectedValue]["Movepool"][2]]["Name"];
    console.log(pokemonmoves[pokemon[selectedValue]["Movepool"][2]]["Name"])
  }
  
  function p2move4(selectedValue) {
    const moveSelectElement4p2 = document.getElementById("moveSelect4p2");
    console.log(pokemon[selectedValue]["Movepool"])
    console.log(pokemon[selectedValue]["Movepool"][3])
    const selectedMove = pokemonmoves[pokemon[selectedValue]["Movepool"][3]]["Name"];
    // Perform actions with the selected move
    moveSelectElement4p2.innerHTML = pokemonmoves[pokemon[selectedValue]["Movepool"][3]]["Name"];
    console.log(pokemonmoves[pokemon[selectedValue]["Movepool"][3]]["Name"])
  }