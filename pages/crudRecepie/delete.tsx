import Router from "next/router";

// funktioner
async function deletePost(id: string): Promise<void> {
  await fetch("???", {
    method: 'DELETE',
  });
  Router.push('/')
};