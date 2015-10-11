/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        CleverTap.setDebugLevel(1);
        CleverTap.enablePersonalization();
        
        CleverTap.recordEventWithName("foo");
        CleverTap.recordEventWithNameAndProps("boo", {"bar":"zoo"});
        CleverTap.recordChargedEventWithDetailsAndItems({"amount":300, "Charged ID":1234}, [{"Category":"Books", "Quantity":1, "Title":"Book Title"}]);
        CleverTap.eventGetFirstTime("foo", function (time) {console.log("foo event first time is "+time);});
        CleverTap.eventGetLastTime("App Launched", function (time) {console.log("app launched last time is "+time);});
        CleverTap.eventGetOccurrences("foo", function (num) {console.log("foo event occurrences "+num);});
        CleverTap.eventGetDetails("Charged", function (res) {console.log(res);});
        CleverTap.getEventHistory(function (history) {console.log(history);});
        
        CleverTap.profileSet({"Identity":123456, "DOB":"1950-10-15", "custom":1.44556});
        
        CleverTap.profileGetProperty("DOB", function(val) {console.log("DOB profile value is "+val);});
        
        CleverTap.profileGetProperty("Identity", function(val) {console.log("Identity profile value is "+val);});
        
        CleverTap.profileGetProperty("custom", function(val) {console.log("custom profile value is "+val);});
        
        CleverTap.registerPush();
        
        CleverTap.sessionGetTimeElapsed(function(val) {console.log("session elapsed time is "+val);});
        CleverTap.sessionGetTotalVisits(function(val) {console.log("session total visits is "+val);});
        CleverTap.sessionGetScreenCount(function(val) {console.log("session screen count is "+val);});
        CleverTap.sessionGetPreviousVisitTime(function(val) {console.log("session previous visit time is "+val);});
        CleverTap.sessionGetUTMDetails(function(val) {console.log(val);});
        
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();