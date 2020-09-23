/* eslint react/no-unknown-property: 0 */
/* eslint react/prefer-stateless-function: 0 */

/**
 * Spotify player iframe widget
 *
 * @author Alexander Wallin <office@alexanderwallin.com>
 * @see https://developer.spotify.com/technologies/widgets/spotify-play-button/
 */

import React from "react";

function SpotifyPlayer({ uri, view, theme, size }) {
  return (
    <iframe
      src="https://open.spotify.com/embed/playlist/5rLyZWIN1lokgCmVk4S0ZF"
      width="300"
      height="380"
      frameBorder="0"
      allowtransparency="true"
      allow="encrypted-media"
      title="spotify-embed"
    ></iframe>
  );
}

export default SpotifyPlayer;
