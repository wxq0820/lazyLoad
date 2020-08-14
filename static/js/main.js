
$(function(){
  function loadImg($img){
        $img.attr('src',$img.attr('data-src'))
    }

    function render(){
        $('.container img').each(function(){
            var $node = $(this)
            if(checkShow($node) && !isLoaded($node)){
                loadImg($node)
            }
        })
    }
    var loading 
    $(window).on('scroll',function(){
        if(loading){
            clearTimeout(loading)
        }
        loading = setTimeout(function(){
            render()
        },100)
    })

    function isLoaded($img){
        return $img.attr('src') === $img.attr('data-src')
    }

    function checkShow($img){
        var windowsHeight = $(window).outerHeight()
        var scrollTop = $(window).scrollTop()
        var offsetTop = $img.offset().top

        if (offsetTop < windowsHeight + scrollTop){
            return true
        }
        return false
    }

    render()
})