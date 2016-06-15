# timetableist

Prototype UI for sports tournament scheduling app (and to teach myself jQuery UI). It's very much a work in progress.

Typically for a tournament time slots and pitches will be limited. Teams don't like playing too many games in a row, nor do they like sitting too many games in row.

This app assists the scheduling process, allowing the user to keep track of each team's individual schedule.

###Unassigned games
Contains all the unassigned games for the tournament. These games can be dragged and dropped. Different colours denote different grades/divisions. The numbers on each element represent teams e.g 1-2 means team one plays team two.

###Timetable
Drag and drop games to timetable. Pitch numbers displayed across, and time slots displayed down the side. e.g. 10 down, 2 across represents a game at 10am on pitch 2. Teams can only play one game at the same time.

###Team Schedules
Allows the games on and off for each team to be easily seen. Each team is represented by a row. Each column represents a time slot. When a game is dragged and dropped to the timetable, the team schedules are updated. The number in each box represents the pitch. The grey boxes turn green when all the games for that team have been assigned.

An example is available here (loads, saves, create not quite implemented yet):

https://preview.c9users.io/matthewwaller/timetableist/timetableist-v001.html?_c9_id=livepreview0&_c9_host=https://ide.c9.io

