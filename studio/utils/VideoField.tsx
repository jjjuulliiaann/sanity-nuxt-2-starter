import { PatchEvent, set, unset } from "part:@sanity/form-builder/patch-event";
import React, { useState } from "react";
import getVideoId from "get-video-id";
import { withDocument } from "part:@sanity/form-builder";
import { nanoid } from "nanoid";
import { FormField } from '@sanity/base/components'
import { TextInput, Card, Container, Flex, Box, Stack, Button, Heading } from "@sanity/ui";
import { AddIcon } from "@sanity/icons";

const VideoIdFieldComponent = (props, ref) => {
  const { onChange, value } = props;

  const [newDoc, setNewDoc] = useState<{
    id: string;
    service: string;
    thumbnail: string;
    url: string;
  }>(value || null);

  const createPatchFrom = (value: any) =>
    PatchEvent.from(value === "" ? unset() : set(value));

  async function getThumbnail({ id, service }) {
    if (service === "youtube") {
      return `https://img.youtube.com/vi/${id}/mqdefault.jpg`;
    }

    if (service === "vimeo") {
      const response = await fetch(
        `https://vimeo.com/api/oembed.json?url=https://player.vimeo.com/video/${id}`
      );
      const json = await response.json();
      return json.thumbnail_url.split("_")[0] + "_480x270";
    }

    return null;
  }

  async function onUrlChange(e) {
    const url = e.target.value;

    if (url.trim().length) {
      const { id, service } = getVideoId(url);
      const thumbnail = await getThumbnail({ id, service });
      setNewDoc({ url, id, service, thumbnail });
	  save()
    } else {
      setNewDoc(null);
    }
  }

  const handleChange = React.useCallback(

	// useCallback will help with performance
	async (event) => {
		const url = event.currentTarget.value

		if (url.trim().length) {
			const { id, service } = getVideoId(url)
      		const thumbnail = await getThumbnail({ id, service })
			setNewDoc({ url, id, service, thumbnail })
			// if the value exists, set the data, if not, unset the data
			const saveDoc = {
				_key: nanoid(),
				_type: "videoId",
				...newDoc,
			  }
			/* onChange(PatchEvent.from(url ? set(saveDoc) : unset())) */
			} else {
				setNewDoc(null)
			}


	  // const inputValue = event.currentTarget.value // get current value
	  // if the value exists, set the data, if not, unset the data
	 /*  onChange(PatchEvent.from(inputValue ? set(inputValue) : unset())) */
	},
	[onChange]
  )

  function save() {
	  console.log("lets save this!")
    onChange(
      createPatchFrom({
        _key: nanoid(),
        _type: "videoId",
        ...newDoc,
      })
    );
  }

  return (
    <FormField
        description={props.type.description}  // Creates description from schema
        title={props.type.title}              // Creates label from schema title
        __unstable_markers={props.markers}    // Handles all markers including validation
        __unstable_presence={props.presence}  // Handles presence avatars
        compareValue={props.compareValue}     // Handles "edited" status
      >
      <TextInput
        type="text"
        onChange={handleChange}
		onBlur={save}
        ref={ref}
        value={newDoc?.url}
      />
	 
		<Card radius={0} shadow={0} tone="transparent" scheme="light" overflow="hidden" borderRight={1} borderLeft={1} borderBottom={1} style={{}}>
		<Flex align="center">
		<Box 
    style={{width: '100%', textAlign: "center", lineHeight: 0}}
  >
	  {newDoc?.thumbnail && <img src={newDoc.thumbnail} />}
	  </Box>
	  </Flex>
	  </Card>
    </FormField>
  );
};

export const VideoIdField = withDocument(
  React.forwardRef(VideoIdFieldComponent)
);