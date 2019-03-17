 $(document).ready(() => {
    const pictureBox = $('img');
    const messageBox = $('div');

    pictureBox.click(function() {
        $('html, body').animate({
            scrollTop: messageBox.offset().top
            }, 2000);
        })
    })