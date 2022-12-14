import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import moment from "moment";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { useRouter } from "next/router";
export default function index() {
  return (
    <div><div><Link href="https://login.microsoftonline.com/7bc94ed8-159e-42e6-9dc2-1c67252d2ac7/oauth2/v2.0/authorize?client_id=5d4d12cd-112d-4e5a-87e9-52c75e3219aa&response_type=code&response_mode=query&scope=https://graph.microsoft.com/.default">
    click
 </Link></div></div>
  )
}
