"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./_components/Tab_6";

const page = () => {
  return (
    <div>
      <Tabs defaultValue="account" className="w-[400px] flex">
        <TabsList activeTab="account" setActiveTab={() => {}}>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          Manage your account settings here.
        </TabsContent>
        <TabsContent value="password">Update your password here.</TabsContent>
        <TabsContent value="settings">
          Customize your application settings here.
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default page;
