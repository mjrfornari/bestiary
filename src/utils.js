import $ from 'jquery'

export function stopVideos() {
    console.log('oi')
    $('#yt_player_iframe').each(function(){
        this.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
    });
}