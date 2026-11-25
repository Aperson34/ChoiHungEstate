# Choi Hung Estate website handoff

Continue the editorial website update in [Aperson34/ChoiHungEstate](https://github.com/Aperson34/ChoiHungEstate) on `main`. The immediate task is to update the published article copy and page structure from the latest Google files.

## Source files

- Use **only the Text draft tab** as the source for article copy. Verify that the connector has returned that specific tab, especially if an export contains multiple tabs. Preserve the draft’s headings, quotations, and source links. [Google Doc](https://docs.google.com/document/d/1TsQz5fTUZN3u8hMgXT9FElLKBDvgINVNTMwRtC6axdA/edit?usp=sharing)
- Use the revised deck to determine the section sequence, layout, and media placement. [Google Slides wireframe](https://docs.google.com/presentation/d/17vAPoLdWr5ilZtmHfvIrPG1oLxgWPqSXIK3ruwrdRno/edit?usp=sharing)

The previous chat could not read either file. Its Drive connector was unavailable and direct requests were blocked by the cloud proxy. The revised content and wireframe have yet to be applied. Some copy and placement on `main` still reflect the earlier attachments.

## What is already in the repo

- The site is static, with markup in `index.html`, styling in `styles.css`, and local JavaScript. Run `python3 -m http.server 4173` from the checkout root for a local preview.
- `gallery.js` initializes three captioned Swiper galleries using the bundled library in `vendor/swiper/`. The galleries currently show sample crops of the photo from the old wireframe. Image and video placeholders have high-contrast component labels.
- `estate-history.js` runs LSY’s original pixel-art canvas code inline, with shortcuts scoped to the focused canvas. The user asked to remove the visible reference line and keep the original drawing and animation code. This is a separate component from the Knight Lab timeline. [LSY reference](https://zoelsy01.github.io/choi-hung-estate/)
- The native redevelopment timeline consolidates the phase details below the introductory prose in date order. Keep phase information in one place when reconciling it with the revised draft and deck.
- Commit `918a107` added the user-supplied Knight Lab **TimelineJS** and **Juxtapose** iframe URLs to `index.html`. TimelineJS currently sits in the redevelopment section and Juxtapose sits below the hero. Both placements were provisional. Their URLs and responsive containers passed browser checks with stubbed responses. Live third-party functionality remains unverified.

## Work to finish

1. Open both Google files through Drive. Compare the **Text draft** tab and the revised slides against the current page before editing.
2. Replace the old copy and update section order, navigation, and media placement to match the new sources. Keep the Swiper galleries and inline LSY animation where the deck calls for them. Update clearly labeled placeholders when media is supplied.
3. Place the two existing Knight Lab iframes where the revised deck specifies. Keep their supplied source URLs and distinguish the Juxtapose image comparison from the Swiper photo galleries.
4. Verify copy and section order against the sources. Check desktop and mobile layouts, gallery and canvas controls, and both live embeds where network access permits. State any live checks still pending.
5. Commit the changes in feature-sized commits and push to `main`. The user also requested a publish link. GitHub Pages activation previously returned `403` from the cloud, and the user did not see the branch deployment option. Verify hosting before presenting any URL as live. [GitHub Pages settings](https://github.com/Aperson34/ChoiHungEstate/settings/pages)
