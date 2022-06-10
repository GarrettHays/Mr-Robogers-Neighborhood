# Mr. Roboger's Neighborhood

#### By _**Garrett Hays**_

#### _Application that uses branching logic, Arrays and Loops to define an outcome for the user based on their inputs._

## Technologies Used

- [x] HTML
- [x] CSS
- [x] JavaScript
- [x] JQuery

## Description

_This project creates an application that intakes user input and runs it through a loop before passing onto branching logic to define an outcome. This outcome is then displayed to the user on the HTML page. This is my third individual project at Epicodus and uses HTML, CSS, JavaScript and JQuery._

## Program Specifications

| Test Description  | Input Example (Code) | Expected Output Example |
| ------------- | ------------- | ------------- |
| It should not allow for anything other than numbers to be entered.  | roboger("hello");  | "Please enter a number."  |
| It should not allow for negative numbers to be entered.  | roboger("-5");  | "Please enter a positive number."  |
| It should not allow for empty submissions.  | --  | "Enter a number."  |
| It should return an array of numbers from 0 to the user's inputted number | roboger("5");  | [0, 1, 2, 3, 4, 5]  |
| It should return "Won't you be my neighbor?" if user inputter number contains 3, and return all numbers that do not contain 3 | roboger("5")  | 0, beep!, boop!, Won't you be my neighbor?, 4, 5 |
| It should return "boop!" if user inputted number contains 2, and return all numbers that do not contain 2.  | roboger("5")  | 0, beep!, boop!, 3, 4, 5 |
| It should return "beep!" if user inputted number contains 1, and return all numbers that do not contain 1.  | roboger("5")  | 0, beep!, 2, 3, 4, 5 |



## Setup/Installation Requirements

* Clone portfolio folder onto desktop from GitHub
* Open index.html file in your browser
* Pick a number and see what Mr. Roboger has to say!


## Known Bugs

* No Known Bugs
  - If you identify any issues or just have questions, ideas or concerns, please feel free to contact [Garrett Hays](mailto:GarrettLHays@gmail.com) to discuss.

## License

MIT

Copyright (c) _06/10/22_ _Garrett Hays_ 