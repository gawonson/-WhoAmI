/*
	Story by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

// timeline.js

document.addEventListener("DOMContentLoaded", function () {
    const events = document.querySelectorAll(".myTL-event");
    events.forEach(event => {
        event.addEventListener("mouseover", function () {
            event.querySelector(".myTL-event-content").style.opacity = "1";
        });
        event.addEventListener("mouseout", function () {
            event.querySelector(".myTL-event-content").style.opacity = "0";
        });
    });
});


// 사내 그룹웨어 프로젝트 클릭 시 inner1으로 스크롤
document.getElementById('link1').addEventListener('click', function(e) {
    e.preventDefault(); // 링크의 기본 동작을 막음
    document.querySelector('.inner1').scrollIntoView({
        behavior: 'smooth',  // 부드럽게 스크롤
        block: 'start'       // 상단에 맞춤
    });
});

// 블로그 플랫폼 클릭 시 inner2로 스크롤
document.getElementById('link2').addEventListener('click', function(e) {
    e.preventDefault(); // 링크의 기본 동작을 막음
    document.querySelector('.inner2').scrollIntoView({
        behavior: 'smooth',  // 부드럽게 스크롤
        block: 'start'       // 상단에 맞춤
    });
});


// 모달과 관련된 요소 가져오기
const modal = document.getElementById("contact-modal");
const btn = document.getElementById("contact-btn");
const closeBtn = document.getElementsByClassName("close")[0];

// 버튼 클릭 시 모달 열기
btn.onclick = function() {
	modal.style.display = "flex";
}

// 닫기 버튼 클릭 시 모달 닫기
closeBtn.onclick = function() {
	modal.style.display = "none";
}

// 모달 바깥 영역 클릭 시 모달 닫기
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}



function showDetails1(type) {
	const detailsSection = document.getElementById("details-section1");
	const detailsContent = document.getElementById("details-content1");

	// 각 항목에 대한 내용 정의
	const details = {
		ref:`
		<div style="display: flex; justify-content: space-between; align-items: center;">
			<div>
				<h3>
					<a href="https://github.com/groupBee" target="_blank" rel="noopener noreferrer">
						<i class="fab fa-github"></i> git
					</a>
				</h3>
				<h3>
					<a href="https://drive.google.com/file/d/1M6Mz18AVEgEUUfmnzvTyGJsPZeZ3zups/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
						<i class="fas fa-file-alt"></i> 발표자료
					</a>
				</h3>
			</div>
			<div style="width: 60%;">
				<iframe width="100%" height="315" 
				src="https://www.youtube.com/embed/4FjUpdmVVVY?start=8113&autoplay=1&cc_load_policy=0&mute=1" 
				title="YouTube video player" frameborder="0" 
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
				</iframe>
			</div>
		</div>


			`,
		tech: `
            <h2>사용 기술</h2>
Frontend
<p>
    <img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white"/>
    <img src="https://img.shields.io/badge/Mui-007FFF?style=flat-square&logo=mui&logoColor=white"/>
    <img src="https://img.shields.io/badge/OpenVidu-1ABC9C?style=flat-square&logo=openvidu&logoColor=white"/>
    <img src="https://img.shields.io/badge/Zustand-433e38?style=flat-square&logo=zustand&logoColor=white"/>
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=black"/>
    <img src="https://img.shields.io/badge/CSS-1572B6?style=flat-square&logo=css3&logoColor=white"/>
    <img src="https://img.shields.io/badge/NPM-CB3837?style=flat-square&logo=npm&logoColor=white"/>
    <img src="https://img.shields.io/badge/FullCalendar-4285F4?style=flat-square&logo=google-calendar&logoColor=white"/>
    <img src="https://img.shields.io/badge/Quill-333333?style=flat-square&logo=quill&logoColor=white"/>
    <img src="https://img.shields.io/badge/Bootstrap-7952B3?style=flat-square&logo=bootstrap&logoColor=white"/>
    <img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white"/>
    <img src="https://img.shields.io/badge/Dropzone-8742f5?style=flat-square&logo=&logoColor=white"/>
    <img src="https://img.shields.io/badge/OpenWeather-EA7600?style=flat-square&logo=openweathermap&logoColor=white"/>
    <img src="https://img.shields.io/badge/React_Router-CA4245?style=flat-square&logo=react-router&logoColor=white"/>
    <img src="https://img.shields.io/badge/WebSocket-000000?style=flat-square&logo=websocket&logoColor=white"/>
    <img src="https://img.shields.io/badge/SweetAlert2-555555?style=flat-square&logoColor=white"/>

</p>

Backend
<p>
    <img src="https://img.shields.io/badge/Spring_Boot-6DB33F?style=flat-square&logo=springboot&logoColor=white"/>
    <img src="https://img.shields.io/badge/Spring_Cloud_OpenFeign-6DB33F?style=flat-square&logo=spring&logoColor=white"/>
    <img src="https://img.shields.io/badge/Apache%20Kafka-231F20?style=flat-square&logo=apache-kafka&logoColor=white"/>
    <img src="https://img.shields.io/badge/Redis-DC382D?style=flat-square&logo=redis&logoColor=white"/>
    <img src="https://img.shields.io/badge/Swagger-85EA2D?style=flat-square&logo=swagger&logoColor=black"/>
    <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white"/>
    <img src="https://img.shields.io/badge/PostgreSQL-336791?style=flat-square&logo=postgresql&logoColor=white"/>
    <img src="https://img.shields.io/badge/QueryDSL-62a9f0?style=flat-square&logo=querydsl&logoColor=white"/>
    <img src="https://img.shields.io/badge/MapStruct-d85a30?style=flat-square&logo=mapstruct&logoColor=white"/>
    <img src="https://img.shields.io/badge/LDAP-EE0000?style=flat-square&logo=redhat&logoColor=white"/>
    <img src="https://img.shields.io/badge/REST%20API-02569B?style=flat-square&logo=rest&logoColor=white"/>
    <img src="https://img.shields.io/badge/XML_RPC-df7b2e?style=flat-square&logo=rest&logoColor=white"/>
    <img src="https://img.shields.io/badge/JPA-Hibernate-59666C?style=flat-square&logo=hibernate&logoColor=white"/>
    <img src="https://img.shields.io/badge/Lombok-FFA500?style=flat-square&logo=lombok&logoColor=white"/>
    <img src="https://img.shields.io/badge/Gradle-02303A?style=flat-square&logo=gradle&logoColor=white"/>
    <img src="https://img.shields.io/badge/JDK-17-007396?style=flat-square&logo=java&logoColor=white"/>
    <img src="https://img.shields.io/badge/STOMP-555555?style=flat-square&logoColor=white"/>
</p>

Infra
<p>
    <img src="https://img.shields.io/badge/Kong-00203F?style=flat-square&logo=kong&logoColor=white"/>
    <img src="https://img.shields.io/badge/Kubernetes-326CE5?style=flat-square&logo=kubernetes&logoColor=white"/>
    <img src="https://img.shields.io/badge/Fail2Ban-0085FF?style=flat-square&logo=fail2ban&logoColor=white"/>
    <img src="https://img.shields.io/badge/Istio-466BB0?style=flat-square&logo=istio&logoColor=white"/>
    <img src="https://img.shields.io/badge/MinIO-00A3E0?style=flat-square&logo=minio&logoColor=white"/>
    <img src="https://img.shields.io/badge/VMware-607078?style=flat-square&logo=vmware&logoColor=white"/>
    <img src="https://img.shields.io/badge/Argo-EF5B25?style=flat-square&logo=argo&logoColor=white"/>
    <img src="https://img.shields.io/badge/Helm-0F1689?style=flat-square&logo=helm&logoColor=white"/>
    <img src="https://img.shields.io/badge/Grafana-F46800?style=flat-square&logo=grafana&logoColor=white"/>
    <img src="https://img.shields.io/badge/Prometheus-E6522C?style=flat-square&logo=prometheus&logoColor=white"/>
    <img src="https://img.shields.io/badge/KubeSphere-3AA1FF?style=flat-square&logo=kubesphere&logoColor=white"/>
    <img src="https://img.shields.io/badge/Postfix-000000?style=flat-square&logo=postfix&logoColor=white"/>
    <img src="https://img.shields.io/badge/Jenkins-D24939?style=flat-square&logo=jenkins&logoColor=white"/>
    <img src="https://img.shields.io/badge/.env-ECD53F?style=flat-square&logo=.env&logoColor=black"/>
    <img src="https://img.shields.io/badge/Naver_Cloud-03C75A?style=flat-square&logo=naver&logoColor=white"/>
    <img src="https://img.shields.io/badge/Ubuntu-E95420?style=flat-square&logo=ubuntu&logoColor=white"/>
    <img src="https://img.shields.io/badge/Rocky%20Linux-10B981?style=flat-square&logo=rockylinux&logoColor=white"/>
    <img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white"/>
    <img src="https://img.shields.io/badge/Docker_Hub-1488C6?style=flat-square&logo=docker&logoColor=white"/>
    <img src="https://img.shields.io/badge/Odoo-870048?style=flat-square&logo=odoo&logoColor=white"/>

</p>

Tool
<p>
    <img src="https://img.shields.io/badge/Jira-0052CC?style=flat-square&logo=jira&logoColor=white"/>
    <img src="https://img.shields.io/badge/Trello-0052CC?style=flat-square&logo=trello&logoColor=white"/>
    <img src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white"/>
    <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white"/>
    <img src="https://img.shields.io/badge/Slack-4A154B?style=flat-square&logo=slack&logoColor=white"/>
    <img src="https://img.shields.io/badge/IntelliJ%20IDEA-000000?style=flat-square&logo=intellij-idea&logoColor=white"/>
    <img src="https://img.shields.io/badge/VS%20Code-007ACC?style=flat-square&logo=visual-studio-code&logoColor=white"/>
    <img src="https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=figma&logoColor=white"/>
    <img src="https://img.shields.io/badge/Postman-FF6C37?style=flat-square&logo=postman&logoColor=white"/>
</p>        `,
		structure: `
            <h2>프로젝트 설명 및 개발 기간</h2>
			<p>개발기간 : 2024.07.25 ~ 2024.09.19 (약 2달) </p>
            <p>Kubernetes 를 활용한 MSA(Micro Service Architecture) 기반의 그룹웨어 입니다.
				벌집은 현대적인 그룹웨어 솔루션으로, 사내 업무의 효율성을 증진시키기 위해 만들게되었습니다. 사용자 친화적인 인터페이스를 통해 누구나 쉽게 접근하고 활용할 수 있도록 설계하였습니다.
				이 프로젝트의 목표는 단순한 업무 도구를 넘어서, 직원들의 소통과 협력할 수 있는 환경을 조성하는 것입니다. 벌집은 기존 HR 시스템과의 연동이 가능하며, 팀 관리와 인사 프로세스 또한 연결가능합니다. 이를 통해 시간과 자본을 절약하고, 보다 효율적인 업무 환경을 제공합니다.
				</p>
        `,
		erd: `
        <h2>프로젝트 구조</h2>
        <div style="display:flex; gap:20px;">
            <!-- 첫 번째 이미지와 설명 -->
            <div style="text-align:center;">
                <p>CI 설계</p>
                <img src="images/ci.png" alt="CI 설계" width="500px" height="250px">
            </div>
            <!-- 두 번째 이미지와 설명 -->
            <div style="text-align:center;">
                <p>CD 설계</p>
                <img src="images/cd.png" alt="CD 설계" width="500px" height="250px">
            </div>
        </div>
        `
		,
		features: `
            <h2>프로젝트 전체 구현 기능</h2>
            <p>로그인, 메인페이지, <b>전자결재</b>, 캘린더, 예약, 게시판, <b>이메일</b>, 근태관리, <b>채팅</b>, 화상회의, 관리자페이지</p>
        `
	};

	// 선택된 타입에 따른 내용을 업데이트
detailsContent.innerHTML = details[type];

// 섹션을 표시
detailsSection.style.display = "block";

// 섹션으로 스크롤 이동
detailsSection.scrollIntoView({
  behavior: "smooth",  // 스크롤을 부드럽게 이동
  block: "start"       // 화면 상단에 맞추어 스크롤
});

}

function showDetails2(type) {
	const detailsSection = document.getElementById("details-section2");
	const detailsContent = document.getElementById("details-content2");

	// 각 항목에 대한 내용 정의
	const details = {
		ref:`
			<div style="display: flex; justify-content: space-between; align-items: center;">
				<h3>
					<a href="https://github.com/gawonson/DevLog" target="_blank" rel="noopener noreferrer">
						<i class="fab fa-github"></i> git
					</a>
				</h3>
				<h3>
					<a href="https://drive.google.com/file/d/1vcTKJt71ERJShg0g15pT1cA2kW2tCHPf/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
						<i class="fas fa-file-alt"></i> 발표자료
					</a>
				</h3>
			</div>

			`,
		tech: `
            <h2>사용 기술</h2> 
			Front
			<p><img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white"/> <img src="https://img.shields.io/badge/JSS-F7DF1E?style=flat-square&logo=JSS&logoColor=black"/> <img src="https://img.shields.io/badge/jQuery-0769AD?style=flat-square&logo=jQuery&logoColor=white"/> <img src="https://img.shields.io/badge/Bootstrapap-7952B3?style=flat-square&logo=bootstrap&logoColor=white"/> <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white"/> <img src="https://img.shields.io/badge/Thymeleaf-005F0F.svg?style=for-the-badge&logo=Thymeleaf&logoColor=white" wdiht=80 height=20>
			</p>Back
			<p><img src="https://img.shields.io/badge/java-007396?style=flat-square&logo=java&logoColor=white"/> <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=MySQL&logoColor=white"/>  <img src="https://img.shields.io/badge/Spring%20Security-6DB33F.svg?style=for-the-badge&logo=Spring-Security&logoColor=white"  width=80 height=20> <img src="https://img.shields.io/badge/Spring%20Boot-6DB33F.svg?style=for-the-badge&logo=Spring-Boot&logoColor=white" width=80 height=20> <img src="https://img.shields.io/badge/Gradle-02303A.svg?style=for-the-badge&logo=Gradle&logoColor=white" width=80 height=20>
			</p>deploy
			<p><img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=Docker&logoColor=white"/> <img src="https://img.shields.io/badge/Linux-FCC624?style=flat-square&logo=linux&logoColor=black"/> <img src="https://img.shields.io/badge/Kubernetes-326CE5?style=flat-square&logo=Kubernetes&logoColor=white"> <img src="https://img.shields.io/badge/jenkins-%232C5263.svg?style=for-the-badge&logo=jenkins&logoColor=white" width=80 height=20/><img src="https://img.shields.io/badge/Harbor-60B932.svg?style=for-the-badge&logo=Harbor&logoColor=white" width=80 height=20 /> <img src="https://img.shields.io/badge/.ENV-ECD53F.svg?style=for-the-badge&logo=dotenv&logoColor=black" height=20 height=20> <img src="https://img.shields.io/badge/VMware-607078.svg?style=for-the-badge&logo=VMware&logoColor=white" width=80 height=20> <img src="https://img.shields.io/badge/Traefik%20Proxy-24A1C1.svg?style=for-the-badge&logo=Traefik-Proxy&logoColor=white" width=80 height=20> <img src="https://img.shields.io/badge/Caddy-1F88C0.svg?style=for-the-badge&logo=Caddy&logoColor=white" width=80 height=20>
			</p>storage
			<p><img src="https://img.shields.io/badge/MinIO-C72E49.svg?style=for-the-badge&logo=MinIO&logoColor=white" widht=80 height=20></p>    `,
		structure: `
            <h2>프로젝트 설명 및 개발 기간</h2>
			<p>개발기간 : 2024.06.07 ~ 2024.07.01 (약 1달) </p>
            <p><ul><li>게시물 생성 (Create)&nbsp;:&nbsp;
				사용자는 새로운 블로그 게시물을 작성하고 게시할 수 있습니다. 게시물 작성 시 제목과 내용을 입력할 수 있으며, 필요에 따라 이미지나 태그를 추가할 수도 있습니다.</li>
				<li>게시물 조회 (Read)&nbsp;:&nbsp;
				사용자는 작성된 블로그 게시물을 목록 형태로 볼 수 있으며, 각 게시물의 제목을 클릭하여 상세 내용을 확인할 수 있습니다. 게시물 목록은 최신 게시물이 상단에 오도록 정렬되어 있습니다.</li>
				<li>게시물 수정 (Update)&nbsp;:&nbsp;
				사용자는 이미 작성된 게시물을 수정할 수 있습니다. 게시물의 제목, 내용, 이미지, 태그 등을 변경할 수 있으며, 수정된 내용은 저장됩니다.</li>
				<li>게시물 삭제 (Delete)&nbsp;:&nbsp;
				사용자는 작성된 게시물을 삭제할 수 있습니다. 삭제된 게시물은 블로그에서 영구적으로 제거됩니다.</li></ul></p>
        `,
		erd: `
        <h2>ERD</h2>
        <div style="display:flex; gap:20px;">
            <!-- 첫 번째 이미지와 설명 -->
            <div style="text-align:center;">
                <img src="images/devlogErd.png" alt="ERD" width="800px" height="550px">
            </div>
        </div>
        `
		,
		features: `
            <h2>프로젝트 전체 구현 기능</h2>
            <p>카카오톡 로그인, <strong>블로그 글 (작성,조회,수정,삭제)</strong>, <strong>블로그 댓글 (작성,조회,수정,삭제)</strong>, <strong>게시글 랜덤조회 피드페이지</strong>, 카테고리별 분류, 해쉬태그, 좋아요 등 </p>
        `
	};

	// 선택된 타입에 따른 내용을 업데이트
	detailsContent.innerHTML = details[type];

	// 섹션을 표시
	detailsSection.style.display = "block";
	// 섹션으로 스크롤 이동
	detailsSection.scrollIntoView({
		behavior: "smooth",  // 스크롤을 부드럽게 이동
		block: "start"       // 화면 상단에 맞추어 스크롤
	});
}
(function ($) {

	var $window = $(window),
		$body = $('body'),
		$wrapper = $('#wrapper');

	// Breakpoints.
	breakpoints({
		xlarge: ['1281px', '1680px'],
		large: ['981px', '1280px'],
		medium: ['737px', '980px'],
		small: ['481px', '736px'],
		xsmall: ['361px', '480px'],
		xxsmall: [null, '360px']
	});

	// Play initial animations on page load.
	$window.on('load', function () {
		window.setTimeout(function () {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Browser fixes.

	// IE: Flexbox min-height bug.
	if (browser.name == 'ie')
		(function () {

			var flexboxFixTimeoutId;

			$window.on('resize.flexbox-fix', function () {

				var $x = $('.fullscreen');

				clearTimeout(flexboxFixTimeoutId);

				flexboxFixTimeoutId = setTimeout(function () {

					if ($x.prop('scrollHeight') > $window.height())
						$x.css('height', 'auto');
					else
						$x.css('height', '100vh');

				}, 250);

			}).triggerHandler('resize.flexbox-fix');

		})();

	// Object fit workaround.
	if (!browser.canUse('object-fit'))
		(function () {

			$('.banner .image, .spotlight .image').each(function () {

				var $this = $(this),
					$img = $this.children('img'),
					positionClass = $this.parent().attr('class').match(/image-position-([a-z]+)/);

				// Set image.
				$this
					.css('background-image', 'url("' + $img.attr('src') + '")')
					.css('background-repeat', 'no-repeat')
					.css('background-size', 'cover');

				// Set position.
				switch (positionClass.length > 1 ? positionClass[1] : '') {

					case 'left':
						$this.css('background-position', 'left');
						break;

					case 'right':
						$this.css('background-position', 'right');
						break;

					default:
					case 'center':
						$this.css('background-position', 'center');
						break;

				}

				// Hide original.
				$img.css('opacity', '0');

			});

		})();

	// Smooth scroll.
	$('.smooth-scroll').scrolly();
	$('.smooth-scroll-middle').scrolly({ anchor: 'middle' });

	// Wrapper.
	$wrapper.children()
		.scrollex({
			top: '30vh',
			bottom: '30vh',
			initialize: function () {
				$(this).addClass('is-inactive');
			},
			terminate: function () {
				$(this).removeClass('is-inactive');
			},
			enter: function () {
				$(this).removeClass('is-inactive');
			},
			leave: function () {

				var $this = $(this);

				if ($this.hasClass('onscroll-bidirectional'))
					$this.addClass('is-inactive');

			}
		});

	// Items.
	$('.items')
		.scrollex({
			top: '30vh',
			bottom: '30vh',
			delay: 50,
			initialize: function () {
				$(this).addClass('is-inactive');
			},
			terminate: function () {
				$(this).removeClass('is-inactive');
			},
			enter: function () {
				$(this).removeClass('is-inactive');
			},
			leave: function () {

				var $this = $(this);

				if ($this.hasClass('onscroll-bidirectional'))
					$this.addClass('is-inactive');

			}
		})
		.children()
		.wrapInner('<div class="inner"></div>');

	// Gallery.
	$('.gallery')
		.wrapInner('<div class="inner"></div>')
		.prepend(browser.mobile ? '' : '<div class="forward"></div><div class="backward"></div>')
		.scrollex({
			top: '30vh',
			bottom: '30vh',
			delay: 50,
			initialize: function () {
				$(this).addClass('is-inactive');
			},
			terminate: function () {
				$(this).removeClass('is-inactive');
			},
			enter: function () {
				$(this).removeClass('is-inactive');
			},
			leave: function () {

				var $this = $(this);

				if ($this.hasClass('onscroll-bidirectional'))
					$this.addClass('is-inactive');

			}
		})
		.children('.inner')
		//.css('overflow', 'hidden')
		.css('overflow-y', browser.mobile ? 'visible' : 'hidden')
		.css('overflow-x', browser.mobile ? 'scroll' : 'hidden')
		.scrollLeft(0);

	// Style #1.
	// ...

	// Style #2.
	$('.gallery')
		.on('wheel', '.inner', function (event) {

			var $this = $(this),
				delta = (event.originalEvent.deltaX * 10);

			// Cap delta.
			if (delta > 0)
				delta = Math.min(25, delta);
			else if (delta < 0)
				delta = Math.max(-25, delta);

			// Scroll.
			$this.scrollLeft($this.scrollLeft() + delta);

		})
		.on('mouseenter', '.forward, .backward', function (event) {

			var $this = $(this),
				$inner = $this.siblings('.inner'),
				direction = ($this.hasClass('forward') ? 1 : -1);

			// Clear move interval.
			clearInterval(this._gallery_moveIntervalId);

			// Start interval.
			this._gallery_moveIntervalId = setInterval(function () {
				$inner.scrollLeft($inner.scrollLeft() + (5 * direction));
			}, 10);

		})
		.on('mouseleave', '.forward, .backward', function (event) {

			// Clear move interval.
			clearInterval(this._gallery_moveIntervalId);

		});

	// Lightbox.
	$('.gallery.lightbox')
		.on('click', 'a', function (event) {

			var $a = $(this),
				$gallery = $a.parents('.gallery'),
				$modal = $gallery.children('.modal'),
				$modalImg = $modal.find('img'),
				href = $a.attr('href');

			// Not an image? Bail.
			if (!href.match(/\.(jpg|gif|png|mp4)$/))
				return;

			// Prevent default.
			event.preventDefault();
			event.stopPropagation();

			// Locked? Bail.
			if ($modal[0]._locked)
				return;

			// Lock.
			$modal[0]._locked = true;

			// Set src.
			$modalImg.attr('src', href);

			// Set visible.
			$modal.addClass('visible');

			// Focus.
			$modal.focus();

			// Delay.
			setTimeout(function () {

				// Unlock.
				$modal[0]._locked = false;

			}, 600);

		})
		.on('click', '.modal', function (event) {

			var $modal = $(this),
				$modalImg = $modal.find('img');

			// Locked? Bail.
			if ($modal[0]._locked)
				return;

			// Already hidden? Bail.
			if (!$modal.hasClass('visible'))
				return;

			// Lock.
			$modal[0]._locked = true;

			// Clear visible, loaded.
			$modal
				.removeClass('loaded')

			// Delay.
			setTimeout(function () {

				$modal
					.removeClass('visible')

				setTimeout(function () {

					// Clear src.
					$modalImg.attr('src', '');

					// Unlock.
					$modal[0]._locked = false;

					// Focus.
					$body.focus();

				}, 475);

			}, 125);

		})
		.on('keypress', '.modal', function (event) {

			var $modal = $(this);

			// Escape? Hide modal.
			if (event.keyCode == 27)
				$modal.trigger('click');

		})
		.prepend('<div class="modal" tabIndex="-1"><div class="inner"><img src="" /></div></div>')
		.find('img')
		.on('load', function (event) {

			var $modalImg = $(this),
				$modal = $modalImg.parents('.modal');

			setTimeout(function () {

				// No longer visible? Bail.
				if (!$modal.hasClass('visible'))
					return;

				// Set loaded.
				$modal.addClass('loaded');

			}, 275);

		});

})(jQuery);