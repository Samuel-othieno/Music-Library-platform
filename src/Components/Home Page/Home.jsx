import React, { useState, useEffect } from "react";
import { Overlay, Container, Group, Title, Button, Text } from "@mantine/core";

export function HomePage() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://developer.spotify.com/documentation/web-api`
        );
        const data = await response.json();
        setSongs(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 h-[75vh]">
      <img
        src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8fDA%3D"
        alt=""
        className="absolute inset-0 -z-10 h-fit w-fit sm:h-full sm:w-full object-cover object-right sm:object-center"
      />
      <div
        className="hidden sm:absolute sm:-top-20 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[black] to-[black] opacity-30"
          style={{
            clipPath: "circle(50%)",
          }}
        />
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-20em] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[black] to-[black] opacity-10"
          style={{
            clipPath: "circle(50%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <Overlay
            gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%"
            opacity={1}
            zIndex={0}
          >
            <Container className="" size="md">
              <div className="flex-row flex justify-between mt-2">
                <Title className="text-yellow-100">MUSIC</Title>
                <Group className="outline-none hover:shadow-red-300 rounded-xl bg-gray-100 max-w-[35%] flex flex-1 flex-row justify-between">
                  <input
                    type="text"
                    className="p-3 outline-none bg-gray-100 w-[60%] h-7 rounded-xl ring-0"
                  />
                  <Button
                    variant="gradient"
                    size="xs"
                    className="outline-none ring-0 w-[30%] text-gray-600 "
                  >
                    Search
                  </Button>
                </Group>
                </div>
                <Text className="text-blue-100 font-semibold" size="xl" mt="xl">
                  Browse all your Favorite music and videos all day long.
                </Text>
              
            </Container>
          </Overlay>
          <ul>
            {songs.map((song) => (
              <li key={song.id}>{song.name}</li>
            ))}
          </ul>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none"></div>
      </div>
    </div>
  );
}
