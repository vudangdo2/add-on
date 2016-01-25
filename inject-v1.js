  function addVisit(mysite1Ex , userowner1Ex){
                          $.ajax({
                                    type: "POST",
                                    url: "wreceive.php",
                                    data: "data=" + mysite1Ex + "---" + '25566429' + "---0---" + userowner1Ex,
                                    cache: false
                                });
            }
