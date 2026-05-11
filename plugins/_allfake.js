import fs from "fs";
import fetch from "node-fetch";
import moment from "moment-timezone";
import axios from "axios";
import speed from "performance-now";

let handler = (m) => m;

handler.all = async function (m) {
  let name = await conn.getName(m.sender);

  let pp =
    "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg";

  let fotonyu = "https://files.catbox.moe/sqgfyy.jpg";
  let logo = "https://files.catbox.moe/sqgfyy.jpg";
  let namebot = "EMK LITE AI";
  let sig = "https://wa.me/qr/FFA4RBEQZQG6O1";

  try {
    // pp = await this.profilePictureUrl(m.sender, "image");
  } catch (e) {
    console.error(e);
  } finally {
    global.emror = "https://files.catbox.moe/sqgfyy.jpg";

    global.doc = pickRandom([
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      "application/msword",
      "application/pdf",
    ]);

    global.fsizedoc = pickRandom([
      2000,
      3000,
      2023000,
      2024000,
    ]);

    // Global modules
    global.axios = (await import("axios")).default;
    global.fetch = (await import("node-fetch")).default;
    global.cheerio = (await import("cheerio")).default;
    global.fs = (await import("fs")).default;

    let timestamp = speed();
    let latensi = speed() - timestamp;
    let ms = latensi.toFixed(4);

    const _uptime = process.uptime() * 1000;

    // Owner contact
    global.kontak2 = [
      [
        owner[0],
        await conn.getName(owner[0] + "@s.whatsapp.net"),
        "EMK AI",
        "https://whatsapp.com",
        true,
      ],
    ];

    global.fkon = {
      key: {
        fromMe: false,
        participant: m.sender,
        ...(m.chat
          ? {
              remoteJid: "status@broadcast",
            }
          : {}),
      },

      message: {
        contactMessage: {
          displayName: `${name}`,
          vcard:
            `BEGIN:VCARD\n` +
            `VERSION:3.0\n` +
            `N:;${name};;;\n` +
            `FN:${name}\n` +
            `item1.TEL;waid=${m.sender.split("@")[0]}:${m.sender.split("@")[0]}\n` +
            `item1.X-ABLabel:Mobile\n` +
            `END:VCARD`,
        },
      },
    };

    global.fVerif = {
      key: {
        participant: "0@s.whatsapp.net",
        remoteJid: "status@broadcast",
      },

      message: {
        conversation: `${namebot} verified successfully`,
      },
    };

    global.ephemeral = "86400";

    global.ucapan = ucapan();
    global.botdate = date();

    global.adReply = {
      contextInfo: {
        isForwarded: true,
        forwardingScore: 1,

        forwardedNewsletterMessageInfo: {
          newsletterJid: "120363318148683520@newsletter",
          serverMessageId: 103,
          newsletterName: "EMK MUSIC | KIM SUN OO",
        },

        externalAdReply: {
          title: namebot,
          body: global.ucapan,
          thumbnailUrl: logo,
          sourceUrl: sig,
          mediaType: 1,
          renderLargerThumbnail: false,
        },
      },
    };

    global.fakeig = {
      contextInfo: {
        externalAdReply: {
          showAdAttribution: true,
          title: namebot,
          body: ucapan(),
          thumbnailUrl: pp,
          sourceUrl: sig,
        },
      },
    };
  }
};

export default handler;

function date() {
  let d = new Date(new Date() + 3600000);

  let locale = "id";

  let week = d.toLocaleDateString(locale, {
    weekday: "long",
  });

  let date = d.toLocaleDateString(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return `${week}, ${date}`;
}

function ucapan() {
  const time = moment.tz("Africa/Casablanca").format("HH");

  let res = "Click here to contact the bot owner";

  if (time >= 4) {
    res = "Good Morning 🌄";
  }

  if (time >= 10) {
    res = "Good Afternoon ☀️";
  }

  if (time >= 15) {
    res = "Good Evening 🌇";
  }

  if (time >= 18) {
    res = "Good Night 🌙";
  }

  return res;
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}
