function showTrackList(element) {
    const cover = element.querySelector('.album-cover');
    const trackList = element.querySelector('.track-list');
    
    cover.style.opacity = "0";
    trackList.style.opacity = "1";
}

function hideTrackList(element) {
    const cover = element.querySelector('.album-cover');
    const trackList = element.querySelector('.track-list');
    
    cover.style.opacity = "1";
    trackList.style.opacity = "0";
}
