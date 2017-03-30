angular.module('app').controller('ConwayCtlr', function ($scope) {
    $scope.title = "Conway Game Of Life";
    $scope.cellSize = 50;
    $scope.speedInput = 100;
    
    var board;
    var nextBoard;
    var Animation = 0;
    var boardSetup;
    var xsize = 10;
    var ysize = 10;

    var dead = 0;
    var alive = 1;
    
    /*Used for drop down box*/
    $scope.gliderType = {
        "type": "select", 
        "name": "gliders",
        "value": "right-down-glider", 
        values: ["right-down-glider", "left-down-glider", "blinker", "flower"]
    };

    function neighbors(board, x, y)
    {
        var n = 0;
        for (dx = - 1; dx <= 1; dx++)
            for (dy = -1; dy <= 1; dy++)
            {
                var ax = x + dx;
                var ay = y + dy;
                if (dx == 0 && dy == 0) {
                    //origin
                    continue;
                }

                if (x <= 0 && dx == -1) {
                    //left boundary going to the left then wrap
                    ax = xsize - 1;
                } else if (x >= (xsize - 1) && dx == 1) {
                    //right boundary
                    ax = 0;
                }

                if (y <= 0 && dy == -1) {
                    //bottom boundary
                    ay = ysize - 1;
                } else if (y >= (ysize - 1) && dy == 1) {
                    //top boundary
                    ay = 0;
                }

                ar = board[ax];
                ar2 = ar[ay];
                if (board[ax][ay] == alive) {
                    n++;
                }
            }
        return n; //returns the number of neighbors that are alive.
    }

    function kill(board, x, y)
    {
        if (board[x][y] == alive)
            board[x][y] = dead;
    }
    
    /* 
     * If the location on the board passed is dead then raise that mother back form the dead.
     * */
    function zombify(board, x, y)
    {
        if (board[x][y] == dead)
            board[x][y] = alive;
    }

    function deepCopy(boardOne, boardTwo) {
        for (var i = 0; i < xsize; i++) {
            for (var j = 0; j < ysize; j++) {
                boardOne[i][j] = boardTwo[i][j];
            }
        }
    }

    function nextStep(board) //performs in N^2 time
    {
        deepCopy(nextBoard, board);
        for (var x = 0; x < xsize; x++) {
            for (var y = 0; y < ysize; y++) {
                n = neighbors(board, x, y);
                if (board[x][y] == dead) {
                    if (n == 3) {
                        zombify(nextBoard, x, y);
                    }
                }
                if (board[x][y] == alive) {
                    if ((n < 2) || (n > 3)) {
                        kill(nextBoard, x, y);
                    }
                }

            }

        }
        deepCopy(board, nextBoard);

    }

    function createGrid(board) {
        var id = "";
        document.getElementById("board").innerHTML = "";
        for (var y = 0; y < ysize; y++) {
            var rowContainer = document.createElement('div');
            rowContainer.className = "rowContainer";
            rowContainer.id = "row" + y;
            for (var x = 0; x < xsize; x++) {
                id = x + '-' + y;
                if (board[x][y] == alive) {
                    var aliveSquare = document.createElement('div'); //utilize a div for less overhead
                    aliveSquare.id = id;
                    aliveSquare.type = 'div';
                    aliveSquare.className = 'aliveSquare';

                    //console.log("alive: " + id);
                    aliveSquare.onclick = createToggleLife(id);
                    //console.log(aliveSquare);
                    //console.log("dead: " + aliveSquare.onclick);
                    rowContainer.appendChild(aliveSquare);
                } else {
                    var deadSquare = document.createElement('div'); //utilize a div for less overhead
                    deadSquare.id = id;
                    deadSquare.type = 'div';
                    deadSquare.className = 'deadSquare';

                    //console.log("dead: " + id);
                    deadSquare.onclick = createToggleLife(id);
                    //console.log(deadSquare);
                    //console.log("dead: " + deadSquare.onclick);
                    rowContainer.appendChild(deadSquare);
                }


            }
            document.getElementById('board').appendChild(rowContainer);
            var br = document.createElement('br');
            document.getElementById("board").appendChild(br);
        }
    }

    function drawboard(board)
    {
        var id = "";
        for (var y = 0; y < ysize; y++) {
            for (var x = 0; x < xsize; x++) {
                id = x + '-' + y;
                if (board[x][y] == alive) {
                    document.getElementById(id).className = 'aliveSquare';
                } else {
                    document.getElementById(id).className = 'deadSquare';
                }
            }
        }
    }

    function createToggleLife(id) {
        return function () {
            //console.log("ToggleLife: " + id);
            var x = id.substring(0, id.indexOf('-'));
            var y = id.substring(id.indexOf('-') + 1, id.length);
            if (board[x][y] == alive) {
                kill(board, x, y);
                document.getElementById(id).className = 'deadSquare';
            } else {
                zombify(board, x, y);
                document.getElementById(id).className = 'aliveSquare';
            }
        }
    }


    $scope.startAnimation = function() {
        // clearInterval(Animation);
        
        var interval = parseInt($scope.speedInput);
        console.log("start animation: " + interval);
//        var interval = parseInt(document.getElementById('speedInput').value);
        $scope.stopAnimation();
        if (typeof interval == 'number') {
            if (interval < 0)
                interval = 100;
            Animation = setInterval(function () {
                nextStep(board);
                drawboard(board);
            }, interval);
        }
    };

    $scope.stopAnimation = function() {
        clearInterval(Animation);
        Animation--;
    };

    function initBoard(b) {
        console.log(b);
        b = new Array(xsize);
        for (var x = 0; x < xsize; ++x)
        {
            b[x] = new Array(ysize);
            for (var y = 0; y < ysize; ++y)
                b[x][y] = 0;
        }
        return b;
    }

    function setupBoardType(type) {
        if (type == "blinker") {
            blinkerBoard();
        } else if (type == "right-down-glider") {
            gliderBoard();
        } else if (type == "left-down-glider") {
            reverseGliderBoard();
        } else if (type == "flower") {
            flowerBoard();
        }
    }
    $scope.setGridSize = function() {
        xsize = document.getElementById('xSize').value;
        ysize = document.getElementById('ySize').value;
        $scope.conwayMain(document.getElementById('elementTypeDropDown').value);
    };
    
    $scope.setCellSize = function(){
        $(".aliveSquare").css("width", $scope.cellSize);
        $(".aliveSquare").css("height", $scope.cellSize);
        $(".deadSquare").css("width", $scope.cellSize);
        $(".deadSquare").css("height", $scope.cellSize);
        console.log("cell size" + $scope.cellSize);
    };

    function blinkerBoard() {
        board[1][0] = 1;
        board[1][1] = 1;
        board[1][2] = 1;
    }
    function gliderBoard() {
        board[2][0] = 1;
        board[2][1] = 1;
        board[2][2] = 1;
        board[1][2] = 1;
        board[0][1] = 1;
    }
    function reverseGliderBoard() {
        board[0][0] = 1;
        board[0][1] = 1;
        board[0][2] = 1;
        board[2][1] = 1;
        board[1][2] = 1;
    }

    function flowerBoard() {
        for(var i=0; i<7; i++){
            for(var j=0; j<3; j++){
                if((i == 1 && j == 1) || (i == 3 && j == 1) || (i == 5 && j == 1)){
                    console.log(i + " " + j);
                } else {
                    board[i][j]=1;
                }
            }
        }
    };

    $scope.$on('$routeChangeStart', function(next, current) { 
       console.log("Navigating away from conway. Stop animation");
       $scope.stopAnimation();
     });

    $scope.conwayMain = function (boardType) {
        console.log(boardType);
        board = initBoard(board);
        nextBoard = initBoard(nextBoard);
        setupBoardType(boardType);
        createGrid(board);
        drawboard(board);
        $scope.setCellSize();
    };
    

//    $scope.blinkerBoard = function () {
//        board[1][0] = 1;
//        board[1][1] = 1;
//        board[1][2] = 1;
//    };
//    $scope.gliderBoard = function () {
//        board[2][0] = 1;
//        board[2][1] = 1;
//        board[2][2] = 1;
//        board[1][2] = 1;
//        board[0][1] = 1;
//    };
//    $scope.reverseGliderBoard = function () {
//        board[0][0] = 1;
//        board[0][1] = 1;
//        board[0][2] = 1;
//        board[2][1] = 1;
//        board[1][2] = 1;
//    };
//    $scope.flowerBoard = function () {
//        board[4][6] = 1;
//        board[5][6] = 1;
//        board[6][6] = 1;
//        board[7][6] = 1;
//        board[8][6] = 1;
//        board[9][6] = 1;
//        board[10][6] = 1;
//        board[4][7] = 1;
//        board[6][7] = 1;
//        board[8][7] = 1;
//        board[10][7] = 1;
//        board[4][8] = 1;
//        board[5][8] = 1;
//        board[6][8] = 1;
//        board[7][8] = 1;
//        board[8][8] = 1;
//        board[9][8] = 1;
//        board[10][8] = 1;
//    };
});