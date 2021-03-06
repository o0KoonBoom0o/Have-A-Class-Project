$(document).ready(function(){
    // getInfoList
    setInterval(function(){
        $.get("../sys/datamanager.getLogList.php", function(getLogList){
            var getLogList = getLogList.split(".")
            $("#getPostList").html(getLogList[0])
            $("#getUserList").html(getLogList[1])
            $("#getTicketList").html(getLogList[2])
        })
    }, 1000)

    $(".backend-post").click(function(){
        $("#getUser").hide()
        $("#getTicket").hide()
        $("#subjectlist").hide()
        $("#ticketlist").hide()
        $("#provincelist").hide()
        $("#teachingtypelist").hide()
        $("#prefixlist").hide()
        $("#getPost").fadeIn()
    })
    $(".backend-user").click(function(){
        $("#getPost").hide()
        $("#getTicket").hide()
        $("#subjectlist").hide()
        $("#ticketlist").hide()
        $("#provincelist").hide()
        $("#teachingtypelist").hide()
        $("#prefixlist").hide()
        $("#getUser").fadeIn()
    })
    $(".backend-ticket").click(function(){
        $("#getPost").hide()
        $("#getUser").hide()
        $("#subjectlist").hide()
        $("#ticketlist").hide()
        $("#provincelist").hide()
        $("#teachingtypelist").hide()
        $("#prefixlist").hide()
        $("#getTicket").fadeIn()
    })
    $(".browse").DataTable()
    $("#close-1").click(function(){
        $("#getPost").fadeOut()
        $("#getUser").fadeOut()
        $("#getTicket").fadeOut()
        $("#subjectlist").fadeOut()
        $("#ticketlist").fadeOut()
        $("#provincelist").fadeOut()
        $("#teachingtypelist").fadeOut()
        $("#prefixlist").fadeOut()
        $("#edit-subject-container").fadeOut()
    })
    $("#close-2").click(function(){
        $("#getPost").fadeOut()
        $("#getUser").fadeOut()
        $("#getTicket").fadeOut()
        $("#subjectlist").fadeOut()
        $("#ticketlist").fadeOut()
        $("#provincelist").fadeOut()
        $("#teachingtypelist").fadeOut()
        $("#prefixlist").fadeOut()
        $("#edit-subject-container").fadeOut()
    })
    $("#close-3").click(function(){
        $("#getPost").fadeOut()
        $("#getUser").fadeOut()
        $("#getTicket").fadeOut()
        $("#subjectlist").fadeOut()
        $("#ticketlist").fadeOut()
        $("#provincelist").fadeOut()
        $("#teachingtypelist").fadeOut()
        $("#prefixlist").fadeOut()
        $("#edit-subject-container").fadeOut()
    })
    $("#close-4").click(function(){
        $("#getPost").fadeOut()
        $("#getUser").fadeOut()
        $("#getTicket").fadeOut()
        $("#subjectlist").fadeOut()
        $("#ticketlist").fadeOut()
        $("#provincelist").fadeOut()
        $("#teachingtypelist").fadeOut()
        $("#prefixlist").fadeOut()
        $("#edit-subject-container").fadeOut()
    })
    $("#close-5").click(function(){
        $("#getPost").fadeOut()
        $("#getUser").fadeOut()
        $("#getTicket").fadeOut()
        $("#subjectlist").fadeOut()
        $("#ticketlist").fadeOut()
        $("#provincelist").fadeOut()
        $("#teachingtypelist").fadeOut()
        $("#prefixlist").fadeOut()
        $("#edit-subject-container").fadeOut()
    })
    $("#close-6").click(function(){
        $("#getPost").fadeOut()
        $("#getUser").fadeOut()
        $("#getTicket").fadeOut()
        $("#subjectlist").fadeOut()
        $("#ticketlist").fadeOut()
        $("#provincelist").fadeOut()
        $("#teachingtypelist").fadeOut()
        $("#prefixlist").fadeOut()
        $("#edit-subject-container").fadeOut()
    })
    $("#close-7").click(function(){
        $("#getPost").fadeOut()
        $("#getUser").fadeOut()
        $("#getTicket").fadeOut()
        $("#subjectlist").fadeOut()
        $("#ticketlist").fadeOut()
        $("#provincelist").fadeOut()
        $("#teachingtypelist").fadeOut()
        $("#prefixlist").fadeOut()
        $("#edit-subject-container").fadeOut()
    })
    $("#close-8").click(function(){
        $("#getPost").fadeOut()
        $("#getUser").fadeOut()
        $("#getTicket").fadeOut()
        $("#subjectlist").fadeOut()
        $("#ticketlist").fadeOut()
        $("#provincelist").fadeOut()
        $("#teachingtypelist").fadeOut()
        $("#prefixlist").fadeOut()
        $("#edit-subject-container").fadeOut()
    })
    $(".add-subject").click(function(){
        $("#getPost").hide()
        $("#getUser").hide()
        $("#getTicket").hide()
        $("#ticketlist").hide()
        $("#provincelist").hide()
        $("#teachingtypelist").hide()
        $("#prefixlist").hide()
        $("#subjectlist").fadeIn()
    })
    $(".add-tickettype").click(function(){
        $("#getPost").hide()
        $("#getUser").hide()
        $("#getTicket").hide()
        $("#subjectlist").hide()
        $("#ticketlist").fadeIn()
        $("#provincelist").hide()
        $("#teachingtypelist").hide()
        $("#prefixlist").hide()
    })
    $(".add-province").click(function(){
        $("#getPost").hide()
        $("#getUser").hide()
        $("#getTicket").hide()
        $("#subjectlist").hide()
        $("#ticketlist").hide()
        $("#provincelist").fadeIn()
        $("#teachingtypelist").hide()
        $("#prefixlist").hide()
    })
    $(".add-teachingtype").click(function(){
        $("#getPost").hide()
        $("#getUser").hide()
        $("#getTicket").hide()
        $("#subjectlist").hide()
        $("#ticketlist").hide()
        $("#provincelist").hide()
        $("#teachingtypelist").fadeIn()
        $("#prefixlist").hide()
    })
    $(".add-prefix").click(function(){
        $("#getPost").hide()
        $("#getUser").hide()
        $("#getTicket").hide()
        $("#subjectlist").hide()
        $("#ticketlist").hide()
        $("#provincelist").hide()
        $("#teachingtypelist").hide()
        $("#prefixlist").fadeIn()
    })

    
})