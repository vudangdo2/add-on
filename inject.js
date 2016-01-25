  var mywindowEx;
            var mycpc1Ex;
            var nowvisitEx = 0;
            var mysite1Ex = 0;
            var mysiteTEx = 0;
            var starttimeEx = 0;
            var endtimeEx = 0;
            var sectimeEx = 1;
            var timersecondsEx = 0;
            var userowner1Ex = 0;
            function DisplayTimerEx() {
                if (nowvisitEx == 1) {
                    if (timersecondsEx > 0) {
                        timersecondsEx = timersecondsEx - 1;
                        $("#Hint").html("<font size=4 color='blue'>You will earn points/cash in " + timersecondsEx + " seconds</font>");
                        setTimeout("DisplayTimerEx();", 1000);
                    } else {
                        $("#Hint").html("<font size=4 color='blue'>Adding Points to your balance...</font>");
                    }
                }
            }
            function VisitThisPageEx(mysite, mycpc, mysiteurl, mysiteTExitle, userowner) {
                if (nowvisitEx == 0) {
                    $("#Hint").html("<font size=4 color='blue'>Opening Website...</font>");
                    document.getElementById("Hint").style.display = 'block';
                    mywindowEx = window.open("http://www.hideref.de/?" + mysiteurl);
                    timersecondsEx = 23;
                    mysiteTEx = mysiteTExitle;
                    userowner1Ex = userowner;
                    $.ajax({type: "GET", url: "gettime.php?a", success: function(msg) {
                            starttimeEx = msg;
                            setTimeout("OkAddCoinsWell2Ex();", 22000);
                            setTimeout("DisplayTimerEx();", 1000);
                            mycpc1Ex = mycpc;
                            mysite1Ex = mysite;
                            nowvisitEx = 1;
                        }});

                }
                else {
                    alert("You can visit only one page in time !");
                }
            }
            function OkAddCoinsWell2Ex() {
                if (mywindowEx.closed) {
                    alert("You had closed popup window !");
                    window.location = 'http://www.likesasap.com';
                }
                else {
                    $.ajax({type: "GET", url: "gettime.php?b", success: function(msg) {
                            endtimeEx = msg;
                            sectimeEx = endtimeEx - starttimeEx;
                            if (sectimeEx < 15) {
                                alert('You did NOT watched the website !');
                            }
                            else {
                                $.ajax({
                                    type: "POST",
                                    url: "wreceive.php",
                                    data: "data=" + mysite1Ex + "---" + '25566429' + "---0---" + userowner1Ex,
                                    cache: false
                                });
                            }
                            alert("Click on OK to Earn (" + (mycpc1Ex - 1) + ") Points.");
                            $("#Hint").html("<font size=4 color='green'>" + (mycpc1Ex - 1) + " Points added to your balance!</font>");
                            mywindowEx.close();
                            nowvisitEx = 0;
                            removeElement('tbl', mysite1Ex);


                        }});

                }
            }
            function SkipThisPageEx(mysite) {
                $("#Hint").html("<font size=4 color='blue'>Skipping ...</font>");
                $.ajax({
                    type: "POST",
                    url: "skipw.php",
                    data: "data=" + mysite + "---" + '25566429',
                    cache: false
                });
                $("#Hint").html("<font size=4 color='blue'>Skipped !</font>");
                removeElement('tbl', mysite);
            }
