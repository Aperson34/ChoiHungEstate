# Choi Hung Estate website handoff

Continue the editorial website update in [Aperson34/ChoiHungEstate](https://github.com/Aperson34/ChoiHungEstate) on `main`. The Google draft and revised wireframe have been applied; the remaining work is final copy, media replacement and live embed verification.

## Source files

- Use **only the Text draft tab** as the source for article copy. Verify that the connector has returned that specific tab, especially if an export contains multiple tabs. Preserve the draft’s headings, quotations, and source links. [Google Doc](https://docs.google.com/document/d/1TsQz5fTUZN3u8hMgXT9FElLKBDvgINVNTMwRtC6axdA/edit?usp=sharing)
- Use the revised deck to determine the section sequence, layout, and media placement. [Google Slides wireframe](https://docs.google.com/presentation/d/17vAPoLdWr5ilZtmHfvIrPG1oLxgWPqSXIK3ruwrdRno/edit?usp=sharing)

On November 25, 2026, both files were read through the Drive connector. Article copy came only from **Text draft**, tab `t.dmg6reh31rxj`; quotations and source links were preserved. Other interview tabs were not used to fill unfinished article sections. Layout follows the visual reading order of all 13 slides, including the staff video before Text 6 and basketball video between Text 8 and Text 9.

## What is already in the repo

- The site is static, with markup in `index.html`, styling in `styles.css`, and local JavaScript. Run `python3 -m http.server 4173` from the checkout root for a local preview.
- `gallery.js` initializes three captioned Swiper galleries using the bundled library in `vendor/swiper/`. The galleries currently show sample crops of the photo from the old wireframe. Image and video placeholders have high-contrast component labels.
- `estate-history.js` runs LSY’s original pixel-art canvas code inline, with shortcuts scoped to the focused canvas. The user asked to remove the visible reference line and keep the original drawing and animation code. This is a separate component from the Knight Lab timeline. [LSY reference](https://zoelsy01.github.io/choi-hung-estate/)
- The native redevelopment timeline consolidates the phase details below the introductory prose in date order. Keep phase information in one place when reconciling it with the revised draft and deck.
- The Juxtapose iframe uses the user-requested `width="950" height="850"`, with its container capped at 950px and responsive width on smaller screens. The earlier CSS aspect-ratio override was removed; scrolling is not hidden. Live content verification still requires Knight Lab network access.
- Commit `918a107` added the user-supplied Knight Lab **TimelineJS** and **Juxtapose** iframe URLs to `index.html`. Their URLs are unchanged. TimelineJS follows Text 4a in the redevelopment section; Juxtapose follows Text 10 in Preservation. Juxtapose is the image comparison, separate from the three Swiper galleries.
- Gallery 1 sits beside Text 2, Gallery 2 follows Text 7, and Gallery 3 sits beside the closing placeholder. All still use clearly labeled sample court crops. LSY’s drawing and animation code is unchanged.
- The supplied Drive videos are embedded in responsive players: `李應記.mp4` in `#lee-video`, `Student Mak Video.mp4` in `#basketball-video`, and `Mrs Kan Video.mp4` in a new `#kan-video` immediately after Text 3 and before Earth video 1. The user explicitly requested this additional Mrs. Kan box; the staff placeholder before Text 6 remains. The supplied videos use finished, unpadded media figures with captions below, separate from the purple placeholder boxes. The user requested removal of the open-in-Drive links. Players share the exact `.measure` / `.wrap` width and responsive gutters, retaining a responsive 16:9 ratio. The user also requested `.measure` match `.wrap`, and the history canvas fills 100% of its container while retaining its original 750:480 ratio. All three preview URLs returned HTTP 200 without a sign-in redirect; this does not by itself prove stream playback.
- Video placement, the retained staff placeholder, and 16:9 player sizing without page overflow passed browser checks at 1440, 390 and 320 pixels. Live playback remains unverified because the environment blocks the Google player scripts on `www.gstatic.com` (`ERR_TUNNEL_CONNECTION_FAILED`).
- Browser checks passed for finished draft paragraphs, source links, section/media order, all three galleries, canvas buttons and focused keyboard controls, reduced-motion gallery settings, and no page overflow at 1440, 768, 390 and 320 pixels. Desktop and mobile screenshots were inspected. JavaScript syntax and `git diff --check` passed. No dependencies were added.
- GitHub reports Pages enabled and the prior Pages build/deployment succeeded. The repository advertises [the published site](https://aperson34.github.io/ChoiHungEstate/). This environment blocks direct requests to that host and `cdn.knightlab.com`; both live embeds failed with `ERR_TUNNEL_CONNECTION_FAILED`, so their third-party content and interactions remain unverified here.

## Work to finish

1. Re-read the **Text draft** tab for future copy changes. Text 11 still contains only `(social worker)` and Text 13 only `closing`; both have visible placeholders. Do not invent their final wording from other tabs.
2. Replace the three galleries’ sample crops with the intended Li Ying Kee, aquarium and neighbourhood photos and captions when supplied. Replace the three remaining video placeholders (staff and two Earth clips), plus the story map placeholder, when assets or URLs arrive.
3. Check the published page and both live Knight Lab embeds in a network that permits their hosts. Verify TimelineJS navigation and Juxtapose dragging/keyboard behavior on desktop and mobile. Preserve the supplied URLs.
4. Commit future changes in feature-sized commits and push to `main`. Confirm the corresponding GitHub Pages deployment succeeds before describing an update as published. [GitHub Pages settings](https://github.com/Aperson34/ChoiHungEstate/settings/pages)
