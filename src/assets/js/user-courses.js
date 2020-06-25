$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
    var actions = $("table td:last-child").html();
    // Append table with add row form on add new button click
    $(".add-new").click(function() {
        $(this).attr("disabled", "disabled");
        var index = $("table tbody tr:last-child").index();
        var row = '<tr>' +
            '<td><input type="text" class="form-control" name="id" id="id"></td>' +
            '<td><input type="text" class="form-control" name="name" id="name"></td>' +
            '<td><input type="text" class="form-control" name="course1" id="course1"></td>' +
            '<td><input type="text" class="form-control" name="course2" id="course2"></td>' +
            '<td><input type="text" class="form-control" name="course3" id="course3"></td>' +
            '<td><input type="text" class="form-control" name="course4" id="course4"></td>' +
            '<td><input type="text" class="form-control" name="course5" id="course5"></td>' +
            '<td><input type="text" class="form-control" name="course6" id="course6"></td>' +
            '<td><input type="text" class="form-control" name="course7" id="course7"></td>' +
            '<td style="background-color: white;">' + actions + '</td>' +
            '</tr>';
        $("table").append(row);
        $("table tbody tr").eq(index + 1).find(".add, .edit").toggle();
        $('[data-toggle="tooltip"]').tooltip();
    });
    // Add row on add button click
    $(document).on("click", ".add", function() {
        var empty = false;
        var input = $(this).parents("tr").find('input[type="text"]');
        input.each(function() {
            if (!$(this).val()) {
                $(this).addClass("error");
                empty = true;
            } else {
                $(this).removeClass("error");
            }
        });
        $(this).parents("tr").find(".error").first().focus();
        if (!empty) {
            input.each(function() {
                $(this).parent("td").html($(this).val());
            });
            $(this).parents("tr").find(".add, .edit").toggle();
            $(".add-new").removeAttr("disabled");
        }
    });
    // Edit row on edit button click
    $(document).on("click", ".edit", function() {
        $(this).parents("tr").find("td:not(:last-child)").each(function() {
            $(this).html('<input type="text" class="form-control" value="' + $(this).text() + '">');
        });
        $(this).parents("tr").find(".add, .edit").toggle();
        $(".add-new").attr("disabled", "disabled");
    });
    // Delete row on delete button click
    $(document).on("click", ".delete", function() {
        $(this).parents("tr").remove();
        $(".add-new").removeAttr("disabled");
    });
});